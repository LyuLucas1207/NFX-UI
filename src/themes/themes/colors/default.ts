import type { ColorTheme } from "../../types";

/**
 * Default — Crimson Red
 * 品牌主色：鲜红 #DC2626，搭配 Tailwind gray 中性色。
 * 适合 IoT 仪表盘的告警/操作视觉调性。
 */
export const defaultColorTheme: ColorTheme = {
  name: "default",
  displayName: "Default",
  variables: {
    primary: "#DC2626",
    primaryHover: "#B91C1C",
    primaryLight: "#FCA5A5",
    primaryBg: "#FEF2F2",
    primaryRgb: "220, 38, 38",
    primaryTransparent: "rgba(220, 38, 38, 0.15)",
    primaryFg: "#FFFFFF",

    success: "#16A34A",
    successLight: "#DCFCE7",
    successRgb: "22, 163, 74",
    info: "#2563EB",
    infoLight: "#DBEAFE",
    infoRgb: "37, 99, 235",
    warning: "#D97706",
    warningLight: "#FEF3C7",
    warningRgb: "217, 119, 6",
    danger: "#EF4444",
    dangerLight: "#FEE2E2",
    dangerRgb: "239, 68, 68",

    bg: "#FFFFFF",
    bg2: "#F9FAFB",
    bg3: "#F3F4F6",
    bg4: "#E5E7EB",
    bgSecondary: "#FEF2F2",

    border: "#F3F4F6",
    border2: "#E5E7EB",
    border3: "#D1D5DB",
    border4: "#9CA3AF",
    border5: "#6B7280",
    borderHover: "#DC2626",

    fg: "#9CA3AF",
    fgText: "#1F2937",
    fgHeading: "#111827",
    fgHighlight: "#DC2626",
    fgMuted: "#6B7280",
    fgOnPrimary: "#FFFFFF",

    separator: "#E5E7EB",

    overlay: "rgba(0, 0, 0, 0.5)",
    shadow: "rgba(0, 0, 0, 0.08)",
    ring: "#DC2626",

    chart1: "#DC2626",
    chart2: "#2563EB",
    chart3: "#16A34A",
    chart4: "#D97706",
    chart5: "#7C3AED",

    temperature: {
      arcFill: ["#FEE2E2", "#FCA5A5", "#F87171", "#EF4444", "#DC2626"],
      arcEmpty: "#F3F4F6",
      thumbBg: "#FFFFFF",
      thumbBorder: "#DC2626",
    },

    solar: {
      gradientLeft: "#DC2626",
      gradientRight: "#F97316",
      shadowColor: "rgba(220, 38, 38, 0.12)",
      secondSeriesFill: "#F3F4F6",
    },

    traffic: {
      tooltipBg: "#FFFFFF",
      tooltipBorderColor: "#E5E7EB",
      tooltipTextColor: "#1F2937",
      yAxisSplitLine: "#F3F4F6",
      lineBg: "#E5E7EB",
      itemColor: "#D1D5DB",
      itemBorderColor: "#D1D5DB",
      itemEmphasisBorderColor: "#DC2626",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
      shadowLineShadow: "rgba(0, 0, 0, 0)",
      gradFrom: "#FEF2F2",
      gradTo: "#FFFFFF",
    },

    electricity: {
      tooltipBg: "#FFFFFF",
      tooltipLineColor: "#1F2937",
      tooltipBorderColor: "#E5E7EB",
      tooltipTextColor: "#1F2937",
      axisLineColor: "#E5E7EB",
      xAxisTextColor: "#6B7280",
      yAxisSplitLine: "#F3F4F6",
      itemBorderColor: "#DC2626",
      lineGradFrom: "#DC2626",
      lineGradTo: "#F97316",
      lineShadow: "rgba(220, 38, 38, 0.2)",
      areaGradFrom: "rgba(220, 38, 38, 0.1)",
      areaGradTo: "rgba(220, 38, 38, 0.02)",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
    },

    echarts: {
      bg: "#FFFFFF",
      textColor: "#1F2937",
      axisLineColor: "#9CA3AF",
      splitLineColor: "#F3F4F6",
      itemHoverShadowColor: "rgba(220, 38, 38, 0.25)",
      tooltipBackgroundColor: "#DC2626",
    },

    chartjs: {
      axisLineColor: "#E5E7EB",
      textColor: "#1F2937",
    },
  },
};
