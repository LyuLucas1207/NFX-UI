import type { ColorTheme } from "../../types";

/**
 * Light — Slate Professional
 * 中性蓝灰色系，无强色彩偏向。
 * 深色 Slate 做主色，适合专业办公/阅读场景。
 */
export const lightColorTheme: ColorTheme = {
  name: "light",
  displayName: "Light",
  variables: {
    primary: "#334155",
    primaryHover: "#1E293B",
    primaryLight: "#CBD5E1",
    primaryBg: "#F8FAFC",
    primaryRgb: "51, 65, 85",
    primaryTransparent: "rgba(51, 65, 85, 0.12)",
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
    bg2: "#F8FAFC",
    bg3: "#F1F5F9",
    bg4: "#E2E8F0",
    bgSecondary: "#F8FAFC",

    border: "#F1F5F9",
    border2: "#E2E8F0",
    border3: "#CBD5E1",
    border4: "#94A3B8",
    border5: "#64748B",
    borderHover: "#334155",

    fg: "#94A3B8",
    fgText: "#334155",
    fgHeading: "#0F172A",
    fgHighlight: "#1E293B",
    fgMuted: "#64748B",
    fgOnPrimary: "#FFFFFF",

    separator: "#E2E8F0",

    overlay: "rgba(0, 0, 0, 0.5)",
    shadow: "rgba(0, 0, 0, 0.08)",
    ring: "#334155",

    chart1: "#334155",
    chart2: "#2563EB",
    chart3: "#16A34A",
    chart4: "#D97706",
    chart5: "#DC2626",

    temperature: {
      arcFill: ["#CBD5E1", "#94A3B8", "#64748B", "#475569", "#334155"],
      arcEmpty: "#F1F5F9",
      thumbBg: "#FFFFFF",
      thumbBorder: "#334155",
    },

    solar: {
      gradientLeft: "#334155",
      gradientRight: "#64748B",
      shadowColor: "rgba(51, 65, 85, 0.1)",
      secondSeriesFill: "#F1F5F9",
    },

    traffic: {
      tooltipBg: "#FFFFFF",
      tooltipBorderColor: "#E2E8F0",
      tooltipTextColor: "#334155",
      yAxisSplitLine: "#F1F5F9",
      lineBg: "#E2E8F0",
      itemColor: "#CBD5E1",
      itemBorderColor: "#CBD5E1",
      itemEmphasisBorderColor: "#334155",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
      shadowLineShadow: "rgba(0, 0, 0, 0)",
      gradFrom: "#F8FAFC",
      gradTo: "#FFFFFF",
    },

    electricity: {
      tooltipBg: "#FFFFFF",
      tooltipLineColor: "#334155",
      tooltipBorderColor: "#E2E8F0",
      tooltipTextColor: "#334155",
      axisLineColor: "#E2E8F0",
      xAxisTextColor: "#64748B",
      yAxisSplitLine: "#F1F5F9",
      itemBorderColor: "#334155",
      lineGradFrom: "#334155",
      lineGradTo: "#64748B",
      lineShadow: "rgba(51, 65, 85, 0.15)",
      areaGradFrom: "rgba(51, 65, 85, 0.08)",
      areaGradTo: "rgba(51, 65, 85, 0.01)",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
    },

    echarts: {
      bg: "#FFFFFF",
      textColor: "#334155",
      axisLineColor: "#94A3B8",
      splitLineColor: "#F1F5F9",
      itemHoverShadowColor: "rgba(51, 65, 85, 0.25)",
      tooltipBackgroundColor: "#334155",
    },

    chartjs: {
      axisLineColor: "#E2E8F0",
      textColor: "#334155",
    },
  },
};
