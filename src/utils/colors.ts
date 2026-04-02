/**
 * 将任意颜色统一为指定透明度的 RGBA（rgb/rgba/hex 均用新 alpha 覆盖）
 * Convert any color to RGBA with given alpha (overwrites existing alpha).
 * @param color - rgb / rgba / hex 字符串
 * @param alpha - 透明度 0–1
 * @returns rgba(r, g, b, alpha) 字符串
 */
export const toRgbaWithAlpha = (color: string, alpha: number): string => {
  const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
  if (rgbaMatch) {
    const [, r, g, b] = rgbaMatch;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return hexToRGBA(color, alpha);
};

/**
 * 将 RGB 颜色转换为 RGBA
 * @param rgb - RGB 颜色字符串，格式: "rgb(r, g, b)"
 * @param alpha - 透明度，范围 0-1
 * @returns RGBA 颜色字符串，格式: "rgba(r, g, b, alpha)"
 *
 * @example
 * rgbToRgba("rgb(250, 30, 22)", 0.3) // "rgba(250, 30, 22, 0.3)"
 */
export const rgbToRgba = (rgb: string, alpha: number): string => {
  if (rgb.startsWith("rgba")) return rgb;
  const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (match) {
    const [, r, g, b] = match;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  console.warn("Invalid RGB color format:", rgb);
  return rgb;
};

/**
 * 将 HEX 颜色转换为 RGBA
 * @param hex - HEX 颜色字符串，格式: "#RRGGBB" 或 "#RGB"
 * @param alpha - 透明度，范围 0-1
 * @returns RGBA 颜色字符串，格式: "rgba(r, g, b, alpha)"
 *
 * @example
 * hexToRGBA("#FA1E16", 0.3) // "rgba(250, 30, 22, 0.3)"
 */
export const hexToRGBA = (hex: string, alpha: number): string => {
  // 如果传入是 rgb 或者 rgba 直接返回
  if (hex.indexOf("rgb") !== -1) return hex;

  let r = 0,
    g = 0,
    b = 0;

  // 去除开头的 '#' 符号
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }

  // 处理 3 位或 6 位十六进制颜色
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  } else {
    console.warn("Unsupported HEX color format");
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * 在两色之间按 factor 线性插值（支持 hex / rgb）
 * Linear color interpolation between start and end by factor (0–1); supports hex and rgb.
 * @param start - 起始颜色
 * @param end - 结束颜色
 * @param factor - 插值系数 0–1
 * @returns rgb(r, g, b) 字符串
 */
export const interpolateColor = (start: string, end: string, factor: number): string => {
  const parse = (color: string): [number, number, number] => {
    const hex = color.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
    if (hex) return [parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)];
    const rgb = color.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i);
    if (rgb) return [parseInt(rgb[1]), parseInt(rgb[2]), parseInt(rgb[3])];
    return [0, 0, 0];
  };
  const [r1, g1, b1] = parse(start);
  const [r2, g2, b2] = parse(end);
  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);
  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * Pick one color from a string pool; fallback to white.
 */
export const pickColor = (pool: string[]): string => {
  return pool[Math.floor(Math.random() * pool.length)] || "#ffffff";
};
