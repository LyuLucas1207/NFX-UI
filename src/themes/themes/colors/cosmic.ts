import type { ColorTheme } from "../../types";

/**
 * Cosmic — Electric Purple
 * 深空紫调，梦幻科幻。
 * 主色电紫 #8B5CF6，深靛蓝背景，薰衣草文字层次。
 */
export const cosmicColorTheme: ColorTheme = {
  name: "cosmic",
  displayName: "Cosmic",
  variables: {
    primary: "#8B5CF6",
    primaryHover: "#7C3AED",
    primaryLight: "#C4B5FD",
    primaryBg: "rgba(139, 92, 246, 0.1)",
    primaryRgb: "139, 92, 246",
    primaryTransparent: "rgba(139, 92, 246, 0.15)",
    primaryFg: "#FFFFFF",

    success: "#22C55E",
    successLight: "#4ADE80",
    successRgb: "34, 197, 94",
    info: "#06B6D4",
    infoLight: "#22D3EE",
    infoRgb: "6, 182, 212",
    warning: "#F59E0B",
    warningLight: "#FBBF24",
    warningRgb: "245, 158, 11",
    danger: "#F43F5E",
    dangerLight: "#FB7185",
    dangerRgb: "244, 63, 94",

    bg: "#0C0A1D",
    bg2: "#151332",
    bg3: "#1E1B4B",
    bg4: "#312E81",
    bgSecondary: "#151332",

    border: "#1E1B4B",
    border2: "#312E81",
    border3: "#4338CA",
    border4: "#6366F1",
    border5: "#818CF8",
    borderHover: "#8B5CF6",

    fg: "#818CF8",
    fgText: "#E0E7FF",
    fgHeading: "#FFFFFF",
    fgHighlight: "#C4B5FD",
    fgMuted: "#6366F1",
    fgOnPrimary: "#0C0A1D",

    separator: "#1E1B4B",

    overlay: "rgba(0, 0, 0, 0.65)",
    shadow: "rgba(0, 0, 0, 0.45)",
    ring: "#8B5CF6",

    chart1: "#8B5CF6",
    chart2: "#06B6D4",
    chart3: "#22C55E",
    chart4: "#F59E0B",
    chart5: "#F43F5E",

    temperature: {
      arcFill: ["#312E81", "#4338CA", "#6366F1", "#8B5CF6", "#C4B5FD"],
      arcEmpty: "#1E1B4B",
      thumbBg: "#151332",
      thumbBorder: "#8B5CF6",
    },

    solar: {
      gradientLeft: "#8B5CF6",
      gradientRight: "#06B6D4",
      shadowColor: "rgba(139, 92, 246, 0.25)",
      secondSeriesFill: "#1E1B4B",
    },

    traffic: {
      tooltipBg: "#1E1B4B",
      tooltipBorderColor: "#312E81",
      tooltipTextColor: "#E0E7FF",
      yAxisSplitLine: "#1E1B4B",
      lineBg: "#312E81",
      itemColor: "#312E81",
      itemBorderColor: "#4338CA",
      itemEmphasisBorderColor: "#8B5CF6",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
      shadowLineShadow: "rgba(0, 0, 0, 0)",
      gradFrom: "#1E1B4B",
      gradTo: "#151332",
    },

    electricity: {
      tooltipBg: "#1E1B4B",
      tooltipLineColor: "#E0E7FF",
      tooltipBorderColor: "#312E81",
      tooltipTextColor: "#E0E7FF",
      axisLineColor: "#312E81",
      xAxisTextColor: "#818CF8",
      yAxisSplitLine: "#1E1B4B",
      itemBorderColor: "#8B5CF6",
      lineGradFrom: "#8B5CF6",
      lineGradTo: "#06B6D4",
      lineShadow: "rgba(139, 92, 246, 0.3)",
      areaGradFrom: "rgba(139, 92, 246, 0.12)",
      areaGradTo: "rgba(139, 92, 246, 0.02)",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
    },

    echarts: {
      bg: "#151332",
      textColor: "#E0E7FF",
      axisLineColor: "#4338CA",
      splitLineColor: "#1E1B4B",
      itemHoverShadowColor: "rgba(139, 92, 246, 0.35)",
      tooltipBackgroundColor: "#1E1B4B",
    },

    chartjs: {
      axisLineColor: "#312E81",
      textColor: "#E0E7FF",
    },
  },
};
