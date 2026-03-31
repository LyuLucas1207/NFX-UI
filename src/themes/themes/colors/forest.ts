import type { ColorTheme } from "../../types";

/**
 * Forest — Deep Green
 * 自然绿 #15803D，翡翠色层级。
 * 有机、宁静、自然，带金黄 warning 做暖色点缀。
 */
export const forestColorTheme: ColorTheme = {
  name: "forest",
  displayName: "Forest",
  variables: {
    primary: "#15803D",
    primaryHover: "#166534",
    primaryLight: "#86EFAC",
    primaryBg: "#F0FDF4",
    primaryRgb: "21, 128, 61",
    primaryTransparent: "rgba(21, 128, 61, 0.12)",
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
    danger: "#DC2626",
    dangerLight: "#FEE2E2",
    dangerRgb: "220, 38, 38",

    bg: "#FFFFFF",
    bg2: "#F0FDF4",
    bg3: "#ECFDF5",
    bg4: "#D1FAE5",
    bgSecondary: "#F0FDF4",

    border: "#D1FAE5",
    border2: "#A7F3D0",
    border3: "#6EE7B7",
    border4: "#34D399",
    border5: "#15803D",
    borderHover: "#15803D",

    fg: "#6B7280",
    fgText: "#1F2937",
    fgHeading: "#052E16",
    fgHighlight: "#15803D",
    fgMuted: "#4B5563",
    fgOnPrimary: "#FFFFFF",

    separator: "#D1FAE5",

    overlay: "rgba(0, 0, 0, 0.5)",
    shadow: "rgba(0, 0, 0, 0.08)",
    ring: "#15803D",

    chart1: "#15803D",
    chart2: "#2563EB",
    chart3: "#D97706",
    chart4: "#DC2626",
    chart5: "#7C3AED",

    temperature: {
      arcFill: ["#D1FAE5", "#6EE7B7", "#34D399", "#16A34A", "#15803D"],
      arcEmpty: "#ECFDF5",
      thumbBg: "#FFFFFF",
      thumbBorder: "#15803D",
    },

    solar: {
      gradientLeft: "#15803D",
      gradientRight: "#059669",
      shadowColor: "rgba(21, 128, 61, 0.2)",
      secondSeriesFill: "#ECFDF5",
    },

    traffic: {
      tooltipBg: "#FFFFFF",
      tooltipBorderColor: "#D1FAE5",
      tooltipTextColor: "#1F2937",
      yAxisSplitLine: "#ECFDF5",
      lineBg: "rgba(21, 128, 61, 0.08)",
      itemColor: "#A7F3D0",
      itemBorderColor: "#6EE7B7",
      itemEmphasisBorderColor: "#15803D",
      shadowLineDarkBg: "rgba(21, 128, 61, 0.1)",
      shadowLineShadow: "rgba(21, 128, 61, 0.15)",
      gradFrom: "#F0FDF4",
      gradTo: "#FFFFFF",
    },

    electricity: {
      tooltipBg: "#FFFFFF",
      tooltipLineColor: "#15803D",
      tooltipBorderColor: "#D1FAE5",
      tooltipTextColor: "#1F2937",
      axisLineColor: "#A7F3D0",
      xAxisTextColor: "#4B5563",
      yAxisSplitLine: "#ECFDF5",
      itemBorderColor: "#15803D",
      lineGradFrom: "#15803D",
      lineGradTo: "#059669",
      lineShadow: "rgba(21, 128, 61, 0.2)",
      areaGradFrom: "rgba(21, 128, 61, 0.15)",
      areaGradTo: "rgba(21, 128, 61, 0.01)",
      shadowLineDarkBg: "rgba(21, 128, 61, 0.08)",
    },

    echarts: {
      bg: "#FFFFFF",
      textColor: "#1F2937",
      axisLineColor: "#6B7280",
      splitLineColor: "#ECFDF5",
      itemHoverShadowColor: "rgba(21, 128, 61, 0.25)",
      tooltipBackgroundColor: "#15803D",
    },

    chartjs: {
      axisLineColor: "#D1FAE5",
      textColor: "#1F2937",
    },
  },
};
