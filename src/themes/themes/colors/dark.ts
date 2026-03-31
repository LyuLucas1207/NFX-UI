import type { ColorTheme } from "../../types";

/**
 * Dark — Amber Gold on Zinc
 * 深色模式，琥珀金主色 + 锌灰背景。
 * 暖色调暗色，层级分明，阅读舒适。
 */
export const darkColorTheme: ColorTheme = {
  name: "dark",
  displayName: "Dark",
  variables: {
    primary: "#D97706",
    primaryHover: "#B45309",
    primaryLight: "#FCD34D",
    primaryBg: "rgba(217, 119, 6, 0.1)",
    primaryRgb: "217, 119, 6",
    primaryTransparent: "rgba(217, 119, 6, 0.15)",
    primaryFg: "#18181B",

    success: "#22C55E",
    successLight: "#4ADE80",
    successRgb: "34, 197, 94",
    info: "#14B8A6",
    infoLight: "#2DD4BF",
    infoRgb: "20, 184, 166",
    warning: "#EAB308",
    warningLight: "#FACC15",
    warningRgb: "234, 179, 8",
    danger: "#EF4444",
    dangerLight: "#F87171",
    dangerRgb: "239, 68, 68",

    bg: "#09090B",
    bg2: "#18181B",
    bg3: "#27272A",
    bg4: "#3F3F46",
    bgSecondary: "#1C1917",

    border: "#27272A",
    border2: "#3F3F46",
    border3: "#52525B",
    border4: "#71717A",
    border5: "#A1A1AA",
    borderHover: "#D97706",

    fg: "#A1A1AA",
    fgText: "#FAFAFA",
    fgHeading: "#FFFFFF",
    fgHighlight: "#FDE047",
    fgMuted: "#71717A",
    fgOnPrimary: "#09090B",

    separator: "#27272A",

    overlay: "rgba(0, 0, 0, 0.65)",
    shadow: "rgba(0, 0, 0, 0.4)",
    ring: "#D97706",

    chart1: "#D97706",
    chart2: "#22C55E",
    chart3: "#14B8A6",
    chart4: "#EF4444",
    chart5: "#8B5CF6",

    temperature: {
      arcFill: ["#92400E", "#B45309", "#D97706", "#EAB308", "#FDE047"],
      arcEmpty: "#27272A",
      thumbBg: "#27272A",
      thumbBorder: "#D97706",
    },

    solar: {
      gradientLeft: "#D97706",
      gradientRight: "#EAB308",
      shadowColor: "rgba(217, 119, 6, 0.25)",
      secondSeriesFill: "#27272A",
    },

    traffic: {
      tooltipBg: "#27272A",
      tooltipBorderColor: "#3F3F46",
      tooltipTextColor: "#FAFAFA",
      yAxisSplitLine: "#27272A",
      lineBg: "#3F3F46",
      itemColor: "#3F3F46",
      itemBorderColor: "#52525B",
      itemEmphasisBorderColor: "#EAB308",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
      shadowLineShadow: "rgba(0, 0, 0, 0)",
      gradFrom: "#27272A",
      gradTo: "#18181B",
    },

    electricity: {
      tooltipBg: "#27272A",
      tooltipLineColor: "#FAFAFA",
      tooltipBorderColor: "#3F3F46",
      tooltipTextColor: "#FAFAFA",
      axisLineColor: "#3F3F46",
      xAxisTextColor: "#A1A1AA",
      yAxisSplitLine: "#27272A",
      itemBorderColor: "#EAB308",
      lineGradFrom: "#D97706",
      lineGradTo: "#EAB308",
      lineShadow: "rgba(217, 119, 6, 0.3)",
      areaGradFrom: "rgba(217, 119, 6, 0.12)",
      areaGradTo: "rgba(217, 119, 6, 0.02)",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
    },

    echarts: {
      bg: "#18181B",
      textColor: "#FAFAFA",
      axisLineColor: "#52525B",
      splitLineColor: "#27272A",
      itemHoverShadowColor: "rgba(217, 119, 6, 0.35)",
      tooltipBackgroundColor: "#27272A",
    },

    chartjs: {
      axisLineColor: "#3F3F46",
      textColor: "#FAFAFA",
    },
  },
};
