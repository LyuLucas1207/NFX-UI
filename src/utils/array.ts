import type { Array } from "@/types";

/**
 * 按 id 将 items 合并进数组：insert 仅插入新 id，upsert 覆盖同 id 并插入新 id；可 prepend 或 append
 * Merge items into array by id: insert = only new ids, upsert = overwrite same id + insert new; place = prepend | append.
 * @param arr - 原数组
 * @param items - 待合并项
 * @param idOf - 取 id 的函数
 * @param place - 新项插入位置
 * @param mode - insert 不覆盖已有 id；upsert 覆盖同 id
 * @returns 合并后的新数组
 */
export function mergeById<T>(arr: Array<T>, items: Array<T>, idOf: (x: T) => string, place: "prepend" | "append", mode: "insert" | "upsert") {
  if (items.length === 0) return arr;

  switch (mode) {
    case "insert":
      return insertUnique(arr, items, idOf, place);
    case "upsert":
      return upsertArray(arr, items, idOf, place);
  }
}

function insertUnique<T>(arr: Array<T>, items: Array<T>, idOf: (x: T) => string, place: "prepend" | "append") {
  const seen = new Set(arr.map(idOf));

  const toInsert = items.filter((x) => {
    const id = idOf(x);
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
  if (toInsert.length === 0) return arr;

  return place === "prepend" ? [...toInsert, ...arr] : [...arr, ...toInsert];
}

function upsertArray<T>(arr: Array<T>, items: Array<T>, idOf: (x: T) => string, place: "prepend" | "append") {
  const idxById = new Map<string, number>();
  arr.forEach((x, i) => idxById.set(idOf(x), i));

  let changed = false;
  const next = arr.slice();

  // Overwrite: elements with the same id are replaced with the real items
  for (const it of items) {
    const id = idOf(it);
    const idx = idxById.get(id);
    if (idx !== undefined) {
      if (next[idx] !== it) {
        next[idx] = it;
        changed = true;
      }
    }
  }

  // Insert: elements with the same id are replaced with the real items
  const toInsert: Array<T> = [];
  for (const it of items) {
    const id = idOf(it);
    if (!idxById.has(id)) toInsert.push(it);
  }
  if (toInsert.length > 0) {
    changed = true;
    return place === "prepend" ? [...toInsert, ...next] : [...next, ...toInsert];
  }

  return changed ? next : arr;
}

/**
 * 从数组中移除 id 在集合 ids 中的项，返回新数组
 * Remove elements whose id is in the given set; return new array.
 * @param arr - 原数组
 * @param ids - 要移除的 id 集合
 * @param idOf - 取 id 的函数
 * @returns 若无变化返回原数组，否则返回新数组
 */
export function pruneArray<T>(arr: Array<T>, ids: ReadonlySet<string>, idOf: (x: T) => string) {
  let changed = false;
  const next = arr.filter((v) => {
    const keep = !ids.has(idOf(v));
    if (!keep) changed = true;
    return keep;
  });
  return changed ? next : arr;
}
