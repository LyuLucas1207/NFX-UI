/**
 * 主题相关类型：颜色变量、基础变量、主题枚举与常量。
 * Theme types: color/base variables, theme enums and constants.
 */

/** 颜色变量（主题色、背景、边框、文字、图表等一切与颜色相关） */
export interface ColorVariables {
  // ─── 主色 Primary ───────────────────────────────────────────────

  /** 主品牌色 — 按钮、链接、激活态 | `--color-primary` */
  primary: string;
  /** 主色悬停 — 按钮 hover / ShowFilter active | `--color-primary-hover` */
  primaryHover: string;
  /** 主色浅色 — 标签底色、浅色按钮、选中态背景 | `--color-primary-light` */
  primaryLight: string;
  /** 主色极浅底 — Input/SearchInput focus 发光底、选中行底 | `--color-primary-bg` */
  primaryBg: string;
  /** 主色 RGB 三元组 — 用于 `rgba(var(--color-primary-rgb), α)` 计算 | `--color-primary-rgb` */
  primaryRgb: string;
  /** 主色半透明 — focus ring 外环、Dropdown 聚焦阴影 | `--color-primary-transparent` `--color-primary-alpha` */
  primaryTransparent: string;
  /** 主色上的前景文字 — 按钮白字 / 深色背景字 | `--color-primary-fg` */
  primaryFg: string;

  // ─── 语义色 Semantic ─────────────────────────────────────────────

  /** 成功色 — Toast 成功、状态徽标 | `--color-success` */
  success: string;
  /** 成功色浅底 — 成功 Alert 背景 | `--color-success-light` */
  successLight: string;
  /** 成功色 RGB — `rgba(var(--color-success-rgb), α)` | `--color-success-rgb` */
  successRgb: string;
  /** 信息色 — 提示 Alert、Badge | `--color-info` */
  info: string;
  /** 信息色浅底 — 信息 Alert 背景 | `--color-info-light` */
  infoLight: string;
  /** 信息色 RGB — `rgba(var(--color-info-rgb), α)` | `--color-info-rgb` */
  infoRgb: string;
  /** 警告色 — 警告 Toast、图标 | `--color-warning` */
  warning: string;
  /** 警告色浅底 — 警告 Alert 背景 | `--color-warning-light` */
  warningLight: string;
  /** 警告色 RGB — `rgba(var(--color-warning-rgb), α)` | `--color-warning-rgb` */
  warningRgb: string;
  /** 危险色 — 删除按钮、表单错误边框 | `--color-danger` `--color-error` */
  danger: string;
  /** 危险色浅底 — 危险按钮 hover、错误 Alert 底 | `--color-danger-light` */
  dangerLight: string;
  /** 危险色 RGB — Input/Textarea 错误 focus ring | `--color-danger-rgb` `--color-error-rgb` */
  dangerRgb: string;

  // ─── 背景 Background ────────────────────────────────────────────

  /** 页面底色 — html body、最外层容器 | `--color-bg` `--color-bg-1` */
  bg: string;
  /** 二级背景 — Sidebar、Footer、卡片 | `--color-bg-2` */
  bg2: string;
  /** 三级背景 — 菜单 hover、条纹行 | `--color-bg-3` */
  bg3: string;
  /** 四级背景 — 深层嵌套面板 | `--color-bg-4` */
  bg4: string;
  /** 辅助背景 — Suspense fallback 面板 | `--color-bg-secondary` */
  bgSecondary: string;

  // ─── 边框 Border ─────────────────────────────────────────────────

  /** 最浅边框 — 容器默认边框 | `--color-border` */
  border: string;
  /** 二级边框 — 分隔线 | `--color-border-2` */
  border2: string;
  /** 三级边框 — Input 非激活边、列表分隔 | `--color-border-3` */
  border3: string;
  /** 四级边框 — Input/Button 默认边框 | `--color-border-4` */
  border4: string;
  /** 五级边框（最深） — disabled Input 边框 | `--color-border-5` */
  border5: string;
  /** 悬停边框 — Suspense retry hover、ShowFilter hover | `--color-border-hover` */
  borderHover: string;

  // ─── 前景 / 文字 Foreground ──────────────────────────────────────

  /** 辅助图标色 — icon placeholder、ShowFilter 默认色 | `--color-fg` */
  fg: string;
  /** 正文文字 — 段落、表格内容 | `--color-fg-text` */
  fgText: string;
  /** 标题文字 — h1-h6、Input label | `--color-fg-heading` */
  fgHeading: string;
  /** 高亮文字 — 链接、Dropdown 选中项 | `--color-fg-highlight` */
  fgHighlight: string;
  /** 次要文字 — placeholder、hint、辅助说明 | `--color-fg-muted` */
  fgMuted: string;
  /** 主色上的文字 — primary 按钮/Badge 内文字 | `--color-fg-on-primary` */
  fgOnPrimary: string;
  /** 分隔线 — Sidebar 底部分隔、Dropdown 选项间隔 | `--color-separator` */
  separator: string;

  // ─── 全局效果 Effects ────────────────────────────────────────────

  /** 遮罩层 — Modal/Drawer 背景蒙版 | `--color-overlay` */
  overlay: string;
  /** 阴影色 — 卡片/弹出层 box-shadow 基色 | `--color-shadow` */
  shadow: string;
  /** 焦点环 — 键盘 Tab 导航 focus outline | `--color-ring` */
  ring: string;

  // ─── 通用图表系列 Chart Series ───────────────────────────────────

  /** 图表系列 1（通常=主色） — 多系列折线/柱状图第 1 组 | `--color-chart-1` */
  chart1: string;
  /** 图表系列 2 — 第 2 组数据线 | `--color-chart-2` */
  chart2: string;
  /** 图表系列 3 — 第 3 组数据线 | `--color-chart-3` */
  chart3: string;
  /** 图表系列 4 — 第 4 组数据线 | `--color-chart-4` */
  chart4: string;
  /** 图表系列 5 — 第 5 组数据线 | `--color-chart-5` */
  chart5: string;

  // ─── 专用图表 Specific Charts ────────────────────────────────────

  /** 温度计仪表盘 — 圆弧填充渐变（5 色由浅到深）、空弧、滑块 */
  temperature: {
    arcFill: string[];
    arcEmpty: string;
    thumbBg: string;
    thumbBorder: string;
  };

  /** 太阳能面板图 — 渐变、阴影、第二系列 */
  solar: {
    gradientLeft: string;
    gradientRight: string;
    shadowColor: string;
    secondSeriesFill: string;
  };

  /** 流量图 — tooltip、坐标轴、数据点、渐变 */
  traffic: {
    tooltipBg: string;
    tooltipBorderColor: string;
    tooltipTextColor: string;
    yAxisSplitLine: string;
    lineBg: string;
    itemColor: string;
    itemBorderColor: string;
    itemEmphasisBorderColor: string;
    shadowLineDarkBg: string;
    shadowLineShadow: string;
    gradFrom: string;
    gradTo: string;
  };

  /** 电力图 — tooltip、坐标轴、折线渐变、面积渐变 */
  electricity: {
    tooltipBg: string;
    tooltipLineColor: string;
    tooltipBorderColor: string;
    tooltipTextColor: string;
    axisLineColor: string;
    xAxisTextColor: string;
    yAxisSplitLine: string;
    itemBorderColor: string;
    lineGradFrom: string;
    lineGradTo: string;
    lineShadow: string;
    areaGradFrom: string;
    areaGradTo: string;
    shadowLineDarkBg: string;
  };

  /** ECharts 全局 — 画布底色、文字、坐标轴、tooltip */
  echarts: {
    bg: string;
    textColor: string;
    axisLineColor: string;
    splitLineColor: string;
    itemHoverShadowColor: string;
    tooltipBackgroundColor: string;
  };

  /** Chart.js 全局 — 坐标轴、文字 */
  chartjs: {
    axisLineColor: string;
    textColor: string;
  };
}

/** 非颜色变量（圆角等，可随平台不同：iOS 24 / Android|Windows 6 / Linux 4） */
export interface BaseVariables {
  /** 按钮圆角（px） | `--radius-button` */
  buttonRadius: number;
  /** 卡片圆角（px） | `--radius-card` */
  cardRadius: number;
  /** 输入框圆角（px） | `--radius-input` */
  inputRadius: number;
}

/** 颜色主题：name/displayName 表示这套配色是谁 */
export interface ColorTheme {
  name: string;
  displayName: string;
  variables: ColorVariables;
}

/** 基础主题：name/displayName 表示这套基础规范是谁（如 iOS / Android / 默认） */
export interface BaseTheme {
  name: string;
  displayName: string;
  variables: BaseVariables;
}

/** 完整主题 = 颜色主题 + 基础主题 */
export interface Theme {
  colors: ColorTheme;
  base: BaseTheme;
}

/** 颜色主题枚举 */
export enum ThemeEnum {
  DEFAULT = "default",
  LIGHT = "light",
  CORPORATE = "corporate",
  FOREST = "forest",
  DARK = "dark",
  COSMIC = "cosmic",
  COFFEE = "coffee",
  WINE = "wine",
  WHEAT = "wheat",
}

export const DEFAULT_THEME = ThemeEnum.DEFAULT;
export const THEME_VALUES = Object.values(ThemeEnum);

/** 基础主题枚举（平台/圆角等，如 iOS 24 / Android|Windows 6 / Linux 4） */
export enum BaseEnum {
  DEFAULT = "default",
  IOS = "ios",
  ANDROID = "android",
  WINDOWS = "windows",
  LINUX = "linux",
}

export const DEFAULT_BASE = BaseEnum.DEFAULT;
export const BASE_VALUES = Object.values(BaseEnum);

export const COLOR_STORAGE_KEY = "theme-color";
export const BASE_STORAGE_KEY = "theme-base";
