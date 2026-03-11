/**
 * 数组类型。Array type.
 * @example Array<string> => string[]
 */
type Array<T> = T[];

/**
 * 可为 null。Nullable: T | null.
 * @example Nullable<string> => string | null
 */
type Nullable<T> = T | null;

/**
 * 可为 undefined。Maybe: T | undefined.
 * @example Maybe<number> => number | undefined
 */
type Maybe<T> = T | undefined;

/**
 * 可为 null 或 undefined。Nilable: T | null | undefined.
 * @example Nilable<boolean> => boolean | null | undefined
 */
type Nilable<T> = T | null | undefined;

/**
 * 可为 null、undefined 或空字符串。Emptyable: T | null | undefined | "".
 * @example Emptyable<string> => string | null | undefined | ""
 */
type Emptyable<T> = T | null | undefined | "";

/**
 * 可为 0 的数值类型。Zeroable: T | 0，T 为 number 子类型。
 * @example Zeroable<number> => number | 0
 */
type Zeroable<T extends number> = T | 0;

/**
 * 可为空字符串的类型。Stringable: T | ""，T 为 string 子类型。
 * @example Stringable<string> => string | ""
 */
type Stringable<T extends string> = T | "";

/**
 * 可为空对象。Objectable: T | {}，T 为对象类型。
 * @example Objectable<{ a: number }> => { a: number } | {}
 */
type Objectable<T extends Record<string, unknown>> = T | {};

/**
 * 可为空数组；T 为元素类型，等价于 Array<T> | []。
 * Arrayable: T[] | []，T 为数组元素类型。
 * @example Arrayable<string> => string[] | []
 */
type Arrayable<T> = Array<T> | [];

/**
 * 存在性结果元组：有值时为 [T, true]，无值时为 [null, false]。用于区分「有值」与「无」而不依赖 undefined。
 * Existence result tuple: [T, true] when present, [null, false] when absent.
 * @example ExistenceResult<{ id: string }> => [{ id: string }, true] | [null, false]
 */
type ExistenceResult<T> = [T, true] | [null, false];

/**
 * 对象 T 所有属性值的联合类型。ValueOf: union of all property value types of T.
 * @example ValueOf<{ a: number; b: string }> => number | string
 */
type ValueOf<T> = T[keyof T];

/**
 * 对象 T 的键字面量联合类型，即 keyof T。KeyOf: key type of T.
 * @example KeyOf<{ a: 1; b: 2 }> => "a" | "b"
 */
type KeyOf<T> = keyof T;

/**
 * 定义品牌类型：用于 defineXxx 的返回值，仅对应的 createXxx/构造函数可接受；Tag 区分不同定义（如 "events" | "router"）。
 * Define brand type: for defineXxx return value, only the matching createXxx accepts; Tag discriminates (e.g. "events" | "router").
 * @example Defined<{ HOME: "/" }, "router"> 仅能传入 createRouter；Defined<{ FOO: "x" }, "events"> 仅能传入 EventEmitter
 */
type Defined<T, Tag extends string> = T & { readonly __defineBrand?: Tag };

/**
 * 判断结果为 OK 时的元组形态：[T, true]；与 ExistenceResult 的「有值」分支一致。
 * Result is OK: tuple [T, true]; same as the present branch of ExistenceResult.
 * @example isOK<{ id: string }> => [T, true]
 */
type isOK<T> = [T, true] | [null, false];

/**
 * 数组或单个元素：T[] | T。用于接口/参数既可传数组也可传单元素时。
 * Array or single element: T[] | T. For APIs that accept either an array or one element.
 * @example ArrayOrSingle<string> => string[] | string
 */
type ArrayOrSingle<T> = T[] | T;

export type { Nullable, Maybe, Nilable, Emptyable, Zeroable, Stringable, Objectable, Arrayable, ExistenceResult, ValueOf, Defined, KeyOf, isOK, Array, ArrayOrSingle };
