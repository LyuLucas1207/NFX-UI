/**
 * 通用事件发射器（按事件名注册/注销/触发）
 * Generic event emitter: subscribe, unsubscribe, and emit by event name.
 *
 * 不传 PayloadMap 时默认 PayloadMap = Record<E, unknown>，每个事件可无参或单参 (unknown)，通用。
 * 传 PayloadMap 时可精确到：void（无参）、单类型（单参）、元组（多参）。
 *
 * @example 不传 PayloadMap（通用：无参或单参均可）
 * ```ts
 * const events = defineEvents({ A: "a", B: "b" });
 * class Em extends EventEmitter<EventNamesOf<typeof events>> { constructor() { super(events); } }
 * const em = new Em();
 * em.on(events.A, () => {}); em.emit(events.A);
 * em.on(events.B, (x) => console.log(x)); em.emit(events.B, data);
 * ```
 * @example 传 PayloadMap（严格单参/多参）
 * ```ts
 * type Map = { FOO: string; LOG: [string, number] };
 * class Em extends EventEmitter<"FOO"|"LOG", Map> { ... }
 * em.on(events.FOO, (x) => {}); em.emit(events.FOO, "hi");
 * em.on(events.LOG, (msg, level) => {}); em.emit(events.LOG, "ok", 1);
 * ```
 */

import type { Defined } from "@/types";

/** 内部存储用回调类型。Internal storage type for listeners. */
type EventCallback<Args extends unknown[] = unknown[]> = (...args: Args) => void;

/**
 * 将 PayloadMap[K] 规范为参数元组。
 * void→[]；unknown（默认/未指定 payload 类型）→ [] | [unknown]（无参或单参，通用）；单类型 T→[T]；元组→不变。
 * Normalize payload to args: void→[]; unknown (default)→optional one arg; single T→[T]; tuple→unchanged.
 */
type ToArgs<P> = P extends void
  ? []
  : unknown extends P
    ? [] | [P]
    : P extends unknown[]
      ? P
      : [P];

/** 由 defineEvents 返回的「已规范事件名对象」类型；constructor 只接受此类型。 */
type DefinedEvents<T extends Record<string, string>> = Defined<T, "events">;

/** 从 events 对象推导出事件名联合类型。Event name union from an events key-value object. */
type EventNamesOf<T> = T extends Defined<infer O, "events"> ? O[keyof O] : T extends Record<string, string> ? T[keyof T] : never;

/**
 * 规范创建「一级 key-value」事件名对象：仅允许 key → 字符串 value，禁止嵌套（类型约束）。
 * 返回 DefinedEvents<T>，供 EventEmitter 构造使用。
 * Define events object: one-level key-value (string values), no nested objects (type-only). Returns DefinedEvents<T> for EventEmitter.
 *
 * @param events - 事件名 key-value 对象。Event name key-value object (e.g. { FOO: "DOMAIN:FOO" }).
 * @returns DefinedEvents<E>，仅此类型可传入 EventEmitter 构造。DefinedEvents<E>; only this type is accepted by EventEmitter constructor.
 * @example
 * ```ts
 * const routerEvents = defineEvents({ NAVIGATE: "ROUTER:NAVIGATE", NAVIGATE_BACK: "ROUTER:NAVIGATE_BACK" });
 * class RouterEmitter extends EventEmitter<EventNamesOf<typeof routerEvents>> { constructor() { super(routerEvents); } }
 * ```
 */
function defineEvents<E extends Record<string, string>>(events: E): DefinedEvents<E> {
  return events as DefinedEvents<E>;
}

function createListenersMap<E extends string>(eventNames: readonly E[]): Record<E, Set<EventCallback>> {
  const map = {} as Record<E, Set<EventCallback>>;
  for (const e of eventNames) {
    map[e] = new Set();
  }
  return map;
}

/**
 * 泛型 EventEmitter：构造函数仅接受 defineEvents 返回的 DefinedEvents 类型，提供 on / off / emit。
 * PayloadMap[K] 可为 void（无参）、单类型 T（单参）、或元组 [A, B, ...]（多参），统一规范为参数列表。
 * PayloadMap[K] can be void (no args), single type T (one arg), or tuple [A, B, ...] (multi arg).
 *
 * @param events - 须为 defineEvents(...) 的返回值（DefinedEvents）。Must be the return value of defineEvents(...) (DefinedEvents).
 */
class EventEmitter<E extends string, PayloadMap extends Record<E, unknown> = Record<E, unknown>> {
  private listeners: Record<E, Set<EventCallback>>;

  constructor(events: DefinedEvents<Record<string, E>>) {
    this.listeners = createListenersMap(Object.values(events as Record<string, E>));
  }

  /**
   * 注册事件监听；回调参数由 PayloadMap[K] 规范为 ...args（无参/单参/多参均支持）。
   * Register a listener; callback args are normalized from PayloadMap[K] (void / single / tuple).
   */
  on<K extends E>(event: K, callback: (...args: ToArgs<PayloadMap[K]>) => void): void {
    this.listeners[event].add(callback as EventCallback);
  }

  /**
   * 移除事件监听（需与 on 时同一引用）。
   * Remove a listener (same reference as passed to on).
   */
  off<K extends E>(event: K, callback: (...args: ToArgs<PayloadMap[K]>) => void): void {
    this.listeners[event].delete(callback as EventCallback);
  }

  /**
   * 触发事件；参数与 PayloadMap[K] 一致：void 无参，T 单参，[A,B] 多参。
   * Emit an event; args match PayloadMap[K]: void → no args, T → one arg, [A,B] → spread.
   */
  emit<K extends E>(event: K, ...args: ToArgs<PayloadMap[K]>): void {
    this.listeners[event].forEach((cb) => cb(...args));
  }
}

export { EventEmitter, defineEvents };
export type { EventCallback, DefinedEvents, EventNamesOf };
