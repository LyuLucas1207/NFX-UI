/**
 * 通用事件发射器（按事件名注册/注销/触发）
 * Generic event emitter: subscribe, unsubscribe, and emit by event name.
 *
 * @example
 * ```ts
 * import { EventEmitter, defineEvents, type EventNamesOf } from "@/events";
 * const events = defineEvents({ FOO: "MY:FOO", BAR: "MY:BAR" });
 * type MyEvent = EventNamesOf<typeof events>;
 * class MyEmitter extends EventEmitter<MyEvent> { constructor() { super(events); } }
 * const em = new MyEmitter();
 * em.on(events.FOO, (x) => console.log(x));
 * em.emit(events.FOO, "hello");
 * ```
 */

import type { Defined } from "@/types";

/** 内部存储用回调类型（on/off 对外暴露泛型回调）。Internal storage type for listeners. */
type EventCallback<Args extends unknown[] = unknown[]> = (...args: Args) => void;

/** 由 defineEvents 返回的「已规范事件名对象」类型；constructor 只接受此类型。 */
type DefinedEvents<T extends Record<string, string>> = Defined<T, "events">;

/** 从 events 对象推导出事件名联合类型。Event name union from an events key-value object. */
type EventNamesOf<T> = T extends Defined<infer O, "events"> ? O[keyof O] : T extends Record<string, string> ? T[keyof T] : never;

/**
 * 事件名到 payload 类型的映射；未指定时默认为 unknown，on/off 回调参数为 unknown。
 * Map event name to payload type; default unknown so callback is (payload: unknown) => void.
 */
type DefaultPayloadMap<E extends string> = Record<E, unknown>;

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
 * 第二泛型 PayloadMap 为「事件名 → payload 类型」映射，未传则全部为 unknown。
 * Generic EventEmitter: constructor accepts only DefinedEvents (returned by defineEvents), provides on / off / emit.
 * Second generic PayloadMap maps event name to payload type; omitted then all payloads are unknown.
 *
 * @param events - 须为 defineEvents(...) 的返回值（DefinedEvents）。Must be the return value of defineEvents(...) (DefinedEvents).
 */
class EventEmitter<E extends string, PayloadMap extends Record<E, unknown> = DefaultPayloadMap<E>> {
  private listeners: Record<E, Set<EventCallback>>;

  constructor(events: DefinedEvents<Record<string, E>>) {
    this.listeners = createListenersMap(Object.values(events as Record<string, E>));
  }

  /**
   * 注册事件监听；回调参数类型由 PayloadMap[event] 推断。
   * Register a listener; callback argument type is inferred from PayloadMap[event].
   */
  on<K extends E>(event: K, callback: (payload: PayloadMap[K]) => void): void {
    this.listeners[event].add(callback as EventCallback);
  }

  /**
   * 移除事件监听（需与 on 时同一引用）。
   * Remove a listener (same reference as passed to on).
   */
  off<K extends E>(event: K, callback: (payload: PayloadMap[K]) => void): void {
    this.listeners[event].delete(callback as EventCallback);
  }

  /**
   * 触发事件；无 payload 时 PayloadMap[K] 为 void 则只传 event。
   * Emit an event; when PayloadMap[K] is void, only event is passed.
   */
  emit<K extends E>(event: K, ...args: PayloadMap[K] extends void ? [] : [PayloadMap[K]]): void {
    this.listeners[event].forEach((cb) => cb(...args));
  }
}

export { EventEmitter, defineEvents };
export type { EventCallback, DefinedEvents, EventNamesOf };
