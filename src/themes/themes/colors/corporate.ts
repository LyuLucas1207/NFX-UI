import type { ColorTheme } from "../../types";

/**
 * Corporate — Blue Professional
 * 企业蓝 #2563EB，搭配轻量蓝灰 Slate 中性色。
 * 冷静、值得信赖、专业感。
 */
export const corporateColorTheme: ColorTheme = {
  name: "corporate",
  displayName: "Corporate",
  variables: {
    primary: "#2563EB",
    primaryHover: "#1D4ED8",
    primaryLight: "#93C5FD",
    primaryBg: "#EFF6FF",
    primaryRgb: "37, 99, 235",
    primaryTransparent: "rgba(37, 99, 235, 0.12)",
    primaryFg: "#FFFFFF",

    success: "#16A34A",
    successLight: "#DCFCE7",
    successRgb: "22, 163, 74",
    info: "#0EA5E9",
    infoLight: "#E0F2FE",
    infoRgb: "14, 165, 233",
    warning: "#D97706",
    warningLight: "#FEF3C7",
    warningRgb: "217, 119, 6",
    danger: "#DC2626",
    dangerLight: "#FEE2E2",
    dangerRgb: "220, 38, 38",

    bg: "#FFFFFF",
    bg2: "#F8FAFC",
    bg3: "#EFF6FF",
    bg4: "#DBEAFE",
    bgSecondary: "#F0F4FF",

    border: "#E2E8F0",
    border2: "#DBEAFE",
    border3: "#BFDBFE",
    border4: "#93C5FD",
    border5: "#60A5FA",
    borderHover: "#2563EB",

    fg: "#94A3B8",
    fgText: "#1E293B",
    fgHeading: "#0F172A",
    fgHighlight: "#1D4ED8",
    fgMuted: "#64748B",
    fgOnPrimary: "#FFFFFF",

    separator: "#E2E8F0",

    overlay: "rgba(0, 0, 0, 0.5)",
    shadow: "rgba(0, 0, 0, 0.08)",
    ring: "#2563EB",

    chart1: "#2563EB",
    chart2: "#16A34A",
    chart3: "#D97706",
    chart4: "#DC2626",
    chart5: "#8B5CF6",

    temperature: {
      arcFill: ["#DBEAFE", "#93C5FD", "#60A5FA", "#3B82F6", "#2563EB"],
      arcEmpty: "#F1F5F9",
      thumbBg: "#FFFFFF",
      thumbBorder: "#2563EB",
    },

    solar: {
      gradientLeft: "#2563EB",
      gradientRight: "#0EA5E9",
      shadowColor: "rgba(37, 99, 235, 0.12)",
      secondSeriesFill: "#F1F5F9",
    },

    traffic: {
      tooltipBg: "#FFFFFF",
      tooltipBorderColor: "#E2E8F0",
      tooltipTextColor: "#1E293B",
      yAxisSplitLine: "#F1F5F9",
      lineBg: "#DBEAFE",
      itemColor: "#BFDBFE",
      itemBorderColor: "#BFDBFE",
      itemEmphasisBorderColor: "#2563EB",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
      shadowLineShadow: "rgba(0, 0, 0, 0)",
      gradFrom: "#EFF6FF",
      gradTo: "#FFFFFF",
    },

    electricity: {
      tooltipBg: "#FFFFFF",
      tooltipLineColor: "#1E293B",
      tooltipBorderColor: "#E2E8F0",
      tooltipTextColor: "#1E293B",
      axisLineColor: "#E2E8F0",
      xAxisTextColor: "#64748B",
      yAxisSplitLine: "#F1F5F9",
      itemBorderColor: "#2563EB",
      lineGradFrom: "#2563EB",
      lineGradTo: "#0EA5E9",
      lineShadow: "rgba(37, 99, 235, 0.18)",
      areaGradFrom: "rgba(37, 99, 235, 0.08)",
      areaGradTo: "rgba(37, 99, 235, 0.01)",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
    },

    echarts: {
      bg: "#FFFFFF",
      textColor: "#1E293B",
      axisLineColor: "#94A3B8",
      splitLineColor: "#F1F5F9",
      itemHoverShadowColor: "rgba(37, 99, 235, 0.25)",
      tooltipBackgroundColor: "#2563EB",
    },

    chartjs: {
      axisLineColor: "#E2E8F0",
      textColor: "#1E293B",
    },
  },
};
