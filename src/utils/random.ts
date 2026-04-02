/**
 * Random utilities (no color logic).
 * 用于项目的随机数/随机选择工具（不包含颜色选择，颜色相关请看 `utils/colors.ts`）。
 */

/**
 * Generate a floating number in range [min, max).
 * 生成区间为 [min, max) 的浮点数。
 */
export const randomBetween = (min: number, max: number): number => {
  return min + Math.random() * (max - min);
};

/**
 * Generate a random integer in range [min, maxInclusive].
 * 生成区间为 [min, maxInclusive] 的整数。
 */
export const randomInt = (minInclusive: number, maxInclusive: number): number => {
  if (maxInclusive < minInclusive) {
    // Fail fast to prevent silent bugs.
    throw new Error("randomInt: maxInclusive must be >= minInclusive");
  }
  const span = maxInclusive - minInclusive + 1;
  return minInclusive + Math.floor(Math.random() * span);
};

/**
 * Randomly return a boolean.
 * @param probability True probability in range [0, 1] (default 0.5).
 */
export const randomBool = (probability = 0.5): boolean => {
  if (probability < 0 || probability > 1) {
    throw new Error("randomBool: probability must be within [0, 1]");
  }
  return Math.random() < probability;
};

/**
 * Alias of `randomBool` (chance).
 * @param probability True probability in range [0, 1] (default 0.5).
 */
export const chance = (probability = 0.5): boolean => {
  return randomBool(probability);
};

/**
 * Randomly return either -1 or 1.
 */
export const randomSign = (): number => {
  return Math.random() < 0.5 ? -1 : 1;
};

/**
 * Randomly pick one element from a pool.
 * 从数组/只读数组中随机取一个元素。
 */
export const pickRandom = <T>(pool: readonly T[]): T => {
  if (pool.length === 0) throw new Error("pickRandom: empty pool");
  return pool[Math.floor(Math.random() * pool.length)];
};

/**
 * Generate a Gaussian (normal) distributed number using Box-Muller.
 * @param mean Mean of the normal distribution.
 * @param stdDev Standard deviation (must be > 0).
 */
export const randomGaussian = (mean = 0, stdDev = 1): number => {
  if (stdDev <= 0) throw new Error("randomGaussian: stdDev must be > 0");
  // Box-Muller transform.
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  const mag = Math.sqrt(-2.0 * Math.log(u));
  const z0 = mag * Math.cos(2.0 * Math.PI * v);
  return z0 * stdDev + mean;
};

