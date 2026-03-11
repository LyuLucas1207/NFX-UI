/**
 * Safe 工具：将 Nilable / Emptyable / Array 等规范为 Nullable、Maybe、Zeroable、Stringable、Array，避免到处写 ?? undefined / ?? null / ?? 0 / ?? "" / ?? []。
 * Safe utils: normalize Nilable/Emptyable/array to Nullable, Maybe, Zeroable, Stringable, Array.
 */

import type { Nullable, Maybe, Nilable, Emptyable, Zeroable, Stringable, Array } from "@/types";

/**
 * 将 Nilable 规范为 Nullable：undefined 转为 null，null 与 T 原样返回。返回类型 Nullable&lt;T&gt;。
 * Normalize Nilable to Nullable: convert undefined to null; null and T unchanged. Returns Nullable&lt;T&gt;.
 * @param value - 可能为 null 或 undefined 的值 (value that may be null or undefined)
 * @returns 若为 undefined 则 null，否则原值 (null if undefined, otherwise value)
 * @example safeNullable(apiResponse.data) // undefined → null，便于区分「未设置」与「空」
 */
export function safeNullable<T>(value: Nilable<T>): Nullable<T> {
  return (value === undefined ? null : value) as Nullable<T>;
}

/**
 * 将 Nilable 规范为 Maybe：null 转为 undefined，undefined 与 T 原样返回。返回类型 Maybe&lt;T&gt;。等同 value ?? undefined。
 * Normalize Nilable to Maybe: convert null to undefined; undefined and T unchanged. Returns Maybe&lt;T&gt;. Same as value ?? undefined.
 * @param value - 可能为 null 或 undefined 的值 (value that may be null or undefined)
 * @returns 若为 null 或 undefined 则 undefined，否则原值 (undefined if null/undefined, otherwise value)
 * @example safeMaybe(product.price) // 代替 product.price ?? undefined
 */
export function safeMaybe<T>(value: Nilable<T>): Maybe<T> {
  return value ?? undefined;
}

/**
 * 将 Emptyable 字符串规范为 Nilable：空字符串转为 undefined，null/undefined/非空串原样。返回类型 Nilable&lt;T&gt;。常用于表单、接口字段。
 * Normalize Emptyable string to Nilable: "" to undefined; null, undefined, non-empty string unchanged. Returns Nilable&lt;T&gt;. For form/API fields.
 * @param value - 可能为 null、undefined 或空字符串 (value that may be null, undefined or "")
 * @returns 若为 "" 则 undefined，否则原值 (undefined if "", otherwise value)
 * @example safeNilable(product.remark) // "" 也视为「无值」
 */
export function safeNilable<T extends string>(value: Emptyable<T>): Nilable<T> {
  return (value === "" ? undefined : value) as Nilable<T>;
}

/**
 * 将 Nilable 数组规范为数组：null/undefined 转为 [] 或 defaultValue。返回类型 Array&lt;T&gt;（即 T[]）。
 * Normalize Nilable array to array: null/undefined to [] or defaultValue. Returns Array&lt;T&gt; (i.e. T[]).
 * @param value - 可能为 null 或 undefined 的数组 (array that may be null or undefined)
 * @param defaultValue - 可选，当 value 为 null/undefined 时使用；缺省为 [] (optional default when value is null/undefined; default is [])
 * @returns value ?? defaultValue ?? [] (never null/undefined)
 * @example safeArray(product.tags) // product.tags ?? []
 * @example safeArray(product.tags, ['default'])
 */
export function safeArray<T>(value: Nilable<Array<T>>, defaultValue?: Array<T>): Array<T> {
  return (value ?? defaultValue ?? []) as Array<T>;
}

/**
 * 将 Nilable 数值规范为 Zeroable：null/undefined 转为 0。返回类型 Zeroable&lt;number&gt;（即 number，0 为兜底）。
 * Normalize Nilable number to Zeroable: null/undefined to 0. Returns Zeroable&lt;number&gt; (number with 0 as fallback).
 * @param value - 可能为 null 或 undefined 的数值 (number that may be null or undefined)
 * @returns value ?? 0 (never null/undefined)
 * @example safeZeroable(product.stock) // 代替 product.stock ?? 0
 */
export function safeZeroable(value: Nilable<number>): Zeroable<number> {
  return (value ?? 0) as Zeroable<number>;
}

/**
 * 将 Emptyable 字符串规范为 Stringable：null/undefined/"" 转为 ""。返回类型 Stringable&lt;string&gt;（即 string，"" 为兜底）。
 * Normalize Emptyable string to Stringable: null/undefined/"" to "". Returns Stringable&lt;string&gt; (string with "" as fallback).
 * @param value - 可能为 null、undefined 或空字符串 (value that may be null, undefined or "")
 * @returns 若为 null、undefined 或 "" 则 ""，否则原值 ("" if null/undefined/"", otherwise value)
 * @example safeStringable(product.name) // 代替 product.name ?? ""
 */
export function safeStringable<T extends string>(value: Emptyable<T>): Stringable<T> {
  if (value === null || value === undefined || value === "") return "" as Stringable<T>;
  return value as Stringable<T>;
}

/**
 * 若值为 null/undefined 则返回默认值，否则返回原值。等同 value ?? defaultValue。
 * Return defaultValue when value is null/undefined, otherwise value. Same as value ?? defaultValue.
 * @param value - 可能为 null 或 undefined 的值 (value that may be null or undefined)
 * @param defaultValue - 默认值 (default value)
 * @returns value ?? defaultValue
 * @example safeOr(product.stock, 0)
 * @example safeOr(product.name, '')
 */
export function safeOr<T, D>(value: Nilable<T>, defaultValue: D): T | D {
  return value ?? defaultValue;
}

/**
 * 安全取数字：null/undefined/NaN 转为 undefined，合法数字原样。返回类型 Maybe&lt;number&gt;。
 * Safe number: null/undefined/NaN to undefined; valid number unchanged. Returns Maybe&lt;number&gt;.
 * @param value - 可能为 null、undefined 或非数字 (value that may be null, undefined or NaN)
 * @returns 若为 null、undefined 或 NaN 则 undefined，否则数字 (undefined if null/undefined/NaN, otherwise number)
 * @example safeNum(product.price) // 用于严格「有值才用」的场景
 */
export function safeNum(value: number | null | undefined): Maybe<number> {
  if (value === null || value === undefined) return undefined;
  const n = Number(value);
  return Number.isNaN(n) ? undefined : n;
}
