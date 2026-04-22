import type { ColorTheme } from "../../types";

/**
 * Wheat — White + yellow accent
 * 与 Default / Forest 共用同一套白底与 Tailwind gray 中性色；仅将主色替换为黄色系（麦田 #A16207，Tailwind yellow-700）。
 * 不再使用整页奶油底，避免与「仅换主色」的浅色主题不一致。
 */
export const wheatColorTheme: ColorTheme = {
  name: "wheat",
  displayName: "麦田",
  variables: {
    primary: "#A16207",
    primaryHover: "#854D0E",
    primaryLight: "#FDE047",
    primaryBg: "#FEFCE8",
    primaryRgb: "161, 98, 7",
    primaryTransparent: "rgba(161, 98, 7, 0.15)",
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
    bgSecondary: "#FEFCE8",

    border: "#F3F4F6",
    border2: "#E5E7EB",
    border3: "#D1D5DB",
    border4: "#9CA3AF",
    border5: "#6B7280",
    borderHover: "#A16207",

    fg: "#9CA3AF",
    fgText: "#1F2937",
    fgHeading: "#111827",
    fgHighlight: "#A16207",
    fgMuted: "#6B7280",
    fgOnPrimary: "#FFFFFF",

    separator: "#E5E7EB",

    overlay: "rgba(0, 0, 0, 0.5)",
    shadow: "rgba(0, 0, 0, 0.08)",
    ring: "#A16207",

    chart1: "#A16207",
    chart2: "#2563EB",
    chart3: "#16A34A",
    chart4: "#D97706",
    chart5: "#7C3AED",

    temperature: {
      arcFill: ["#FEF9C3", "#FDE047", "#EAB308", "#CA8A04", "#A16207"],
      arcEmpty: "#F3F4F6",
      thumbBg: "#FFFFFF",
      thumbBorder: "#A16207",
    },

    solar: {
      gradientLeft: "#A16207",
      gradientRight: "#F97316",
      shadowColor: "rgba(161, 98, 7, 0.12)",
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
      itemEmphasisBorderColor: "#A16207",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
      shadowLineShadow: "rgba(0, 0, 0, 0)",
      gradFrom: "#FEFCE8",
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
      itemBorderColor: "#A16207",
      lineGradFrom: "#A16207",
      lineGradTo: "#F97316",
      lineShadow: "rgba(161, 98, 7, 0.2)",
      areaGradFrom: "rgba(161, 98, 7, 0.1)",
      areaGradTo: "rgba(161, 98, 7, 0.02)",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
    },

    echarts: {
      bg: "#FFFFFF",
      textColor: "#1F2937",
      axisLineColor: "#9CA3AF",
      splitLineColor: "#F3F4F6",
      itemHoverShadowColor: "rgba(161, 98, 7, 0.25)",
      tooltipBackgroundColor: "#A16207",
    },

    chartjs: {
      axisLineColor: "#E5E7EB",
      textColor: "#1F2937",
    },
  },
};
