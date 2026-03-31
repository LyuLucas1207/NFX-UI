import type { ColorTheme } from "../../types";

/**
 * Wheat — Golden Harvest
 * 浅色暖金，主色琥珀 #B45309。
 * 暖奶油色背景 + 深棕文字，丰收质感。
 * danger 使用独立红色，不与 primary 金色混淆。
 */
export const wheatColorTheme: ColorTheme = {
  name: "wheat",
  displayName: "麦田",
  variables: {
    primary: "#B45309",
    primaryHover: "#92400E",
    primaryLight: "#FCD34D",
    primaryBg: "#FFFBEB",
    primaryRgb: "180, 83, 9",
    primaryTransparent: "rgba(180, 83, 9, 0.12)",
    primaryFg: "#FFFFFF",

    success: "#16A34A",
    successLight: "#DCFCE7",
    successRgb: "22, 163, 74",
    info: "#D97706",
    infoLight: "#FEF3C7",
    infoRgb: "217, 119, 6",
    warning: "#CA8A04",
    warningLight: "#FEF9C3",
    warningRgb: "202, 138, 4",
    danger: "#DC2626",
    dangerLight: "#FEE2E2",
    dangerRgb: "220, 38, 38",

    bg: "#FFFDF7",
    bg2: "#FFF8E7",
    bg3: "#FEF3C7",
    bg4: "#FDE68A",
    bgSecondary: "#FFFBEB",

    border: "#FDE68A",
    border2: "#FCD34D",
    border3: "#FBBF24",
    border4: "#D97706",
    border5: "#92400E",
    borderHover: "#B45309",

    fg: "#92400E",
    fgText: "#451A03",
    fgHeading: "#1C0A00",
    fgHighlight: "#B45309",
    fgMuted: "#78350F",
    fgOnPrimary: "#FFFFFF",

    separator: "#FDE68A",

    overlay: "rgba(0, 0, 0, 0.5)",
    shadow: "rgba(0, 0, 0, 0.1)",
    ring: "#B45309",

    chart1: "#B45309",
    chart2: "#16A34A",
    chart3: "#2563EB",
    chart4: "#DC2626",
    chart5: "#7C3AED",

    temperature: {
      arcFill: ["#FEF3C7", "#FCD34D", "#FBBF24", "#D97706", "#B45309"],
      arcEmpty: "#FFF8E7",
      thumbBg: "#FFFDF7",
      thumbBorder: "#B45309",
    },

    solar: {
      gradientLeft: "#B45309",
      gradientRight: "#D97706",
      shadowColor: "rgba(180, 83, 9, 0.15)",
      secondSeriesFill: "#FEF3C7",
    },

    traffic: {
      tooltipBg: "#FFFDF7",
      tooltipBorderColor: "#FDE68A",
      tooltipTextColor: "#451A03",
      yAxisSplitLine: "#FEF3C7",
      lineBg: "#FDE68A",
      itemColor: "#FCD34D",
      itemBorderColor: "#FCD34D",
      itemEmphasisBorderColor: "#B45309",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
      shadowLineShadow: "rgba(0, 0, 0, 0)",
      gradFrom: "#FFF8E7",
      gradTo: "#FFFDF7",
    },

    electricity: {
      tooltipBg: "#FFFDF7",
      tooltipLineColor: "#451A03",
      tooltipBorderColor: "#FDE68A",
      tooltipTextColor: "#451A03",
      axisLineColor: "#FDE68A",
      xAxisTextColor: "#78350F",
      yAxisSplitLine: "#FEF3C7",
      itemBorderColor: "#B45309",
      lineGradFrom: "#B45309",
      lineGradTo: "#D97706",
      lineShadow: "rgba(180, 83, 9, 0.2)",
      areaGradFrom: "rgba(180, 83, 9, 0.1)",
      areaGradTo: "rgba(180, 83, 9, 0.02)",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
    },

    echarts: {
      bg: "#FFFDF7",
      textColor: "#451A03",
      axisLineColor: "#92400E",
      splitLineColor: "#FEF3C7",
      itemHoverShadowColor: "rgba(180, 83, 9, 0.25)",
      tooltipBackgroundColor: "#B45309",
    },

    chartjs: {
      axisLineColor: "#FDE68A",
      textColor: "#451A03",
    },
  },
};
