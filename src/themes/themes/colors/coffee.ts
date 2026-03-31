import type { ColorTheme } from "../../types";

/**
 * Coffee — Warm Earth
 * 深色暖棕，焦糖拿铁主色 #C49A6C。
 * 深咖啡背景 + 奶油色文字，温暖舒适。
 */
export const coffeeColorTheme: ColorTheme = {
  name: "coffee",
  displayName: "Coffee",
  variables: {
    primary: "#C49A6C",
    primaryHover: "#A67C50",
    primaryLight: "#E8D5C0",
    primaryBg: "rgba(196, 154, 108, 0.1)",
    primaryRgb: "196, 154, 108",
    primaryTransparent: "rgba(196, 154, 108, 0.15)",
    primaryFg: "#1A1209",

    success: "#6D9F72",
    successLight: "#8DBE91",
    successRgb: "109, 159, 114",
    info: "#8A7968",
    infoLight: "#A89888",
    infoRgb: "138, 121, 104",
    warning: "#D4A574",
    warningLight: "#E8C9A0",
    warningRgb: "212, 165, 116",
    danger: "#C0392B",
    dangerLight: "#D65A4A",
    dangerRgb: "192, 57, 43",

    bg: "#1A1209",
    bg2: "#28201A",
    bg3: "#3A2E24",
    bg4: "#4E3D30",
    bgSecondary: "#28201A",

    border: "#3A2E24",
    border2: "#4E3D30",
    border3: "#6B5744",
    border4: "#8B7355",
    border5: "#C49A6C",
    borderHover: "#C49A6C",

    fg: "#8B7355",
    fgText: "#F5E6D3",
    fgHeading: "#FFF8F0",
    fgHighlight: "#E8C9A0",
    fgMuted: "#6B5744",
    fgOnPrimary: "#1A1209",

    separator: "#3A2E24",

    overlay: "rgba(0, 0, 0, 0.65)",
    shadow: "rgba(0, 0, 0, 0.4)",
    ring: "#C49A6C",

    chart1: "#C49A6C",
    chart2: "#6D9F72",
    chart3: "#D4A574",
    chart4: "#C0392B",
    chart5: "#8A7968",

    temperature: {
      arcFill: ["#4E3D30", "#8B7355", "#A67C50", "#C49A6C", "#E8D5C0"],
      arcEmpty: "#3A2E24",
      thumbBg: "#28201A",
      thumbBorder: "#C49A6C",
    },

    solar: {
      gradientLeft: "#C49A6C",
      gradientRight: "#E8D5C0",
      shadowColor: "rgba(196, 154, 108, 0.25)",
      secondSeriesFill: "#3A2E24",
    },

    traffic: {
      tooltipBg: "#3A2E24",
      tooltipBorderColor: "#6B5744",
      tooltipTextColor: "#F5E6D3",
      yAxisSplitLine: "#3A2E24",
      lineBg: "#4E3D30",
      itemColor: "#4E3D30",
      itemBorderColor: "#6B5744",
      itemEmphasisBorderColor: "#C49A6C",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
      shadowLineShadow: "rgba(0, 0, 0, 0)",
      gradFrom: "#3A2E24",
      gradTo: "#28201A",
    },

    electricity: {
      tooltipBg: "#3A2E24",
      tooltipLineColor: "#F5E6D3",
      tooltipBorderColor: "#6B5744",
      tooltipTextColor: "#F5E6D3",
      axisLineColor: "#4E3D30",
      xAxisTextColor: "#8B7355",
      yAxisSplitLine: "#3A2E24",
      itemBorderColor: "#C49A6C",
      lineGradFrom: "#C49A6C",
      lineGradTo: "#E8D5C0",
      lineShadow: "rgba(196, 154, 108, 0.25)",
      areaGradFrom: "rgba(196, 154, 108, 0.12)",
      areaGradTo: "rgba(196, 154, 108, 0.02)",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
    },

    echarts: {
      bg: "#1A1209",
      textColor: "#F5E6D3",
      axisLineColor: "#8B7355",
      splitLineColor: "#3A2E24",
      itemHoverShadowColor: "rgba(196, 154, 108, 0.35)",
      tooltipBackgroundColor: "#3A2E24",
    },

    chartjs: {
      axisLineColor: "#4E3D30",
      textColor: "#F5E6D3",
    },
  },
};
