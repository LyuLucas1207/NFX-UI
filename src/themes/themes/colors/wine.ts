import type { ColorTheme } from "../../types";

/**
 * Wine — Burgundy Rose
 * 深色酒红，主色 #9F1239 (Rose-800)。
 * 深酒红背景 + 淡玫瑰文字，高贵典雅。
 */
export const wineColorTheme: ColorTheme = {
  name: "wine",
  displayName: "Wine",
  variables: {
    primary: "#9F1239",
    primaryHover: "#881337",
    primaryLight: "#FDA4AF",
    primaryBg: "rgba(159, 18, 57, 0.1)",
    primaryRgb: "159, 18, 57",
    primaryTransparent: "rgba(159, 18, 57, 0.15)",
    primaryFg: "#FFF1F2",

    success: "#6D9F6D",
    successLight: "#8DBE8D",
    successRgb: "109, 159, 109",
    info: "#8A6E7A",
    infoLight: "#A88E98",
    infoRgb: "138, 110, 122",
    warning: "#C49050",
    warningLight: "#D4B080",
    warningRgb: "196, 144, 80",
    danger: "#E11D48",
    dangerLight: "#FB7185",
    dangerRgb: "225, 29, 72",

    bg: "#1A0810",
    bg2: "#2D0F1A",
    bg3: "#3F1525",
    bg4: "#521C30",
    bgSecondary: "#2D0F1A",

    border: "#3F1525",
    border2: "#521C30",
    border3: "#7F2848",
    border4: "#9F1239",
    border5: "#FB7185",
    borderHover: "#9F1239",

    fg: "#D4899A",
    fgText: "#FFF1F2",
    fgHeading: "#FFFFFF",
    fgHighlight: "#FDA4AF",
    fgMuted: "#A0576D",
    fgOnPrimary: "#1A0810",

    separator: "#3F1525",

    overlay: "rgba(0, 0, 0, 0.65)",
    shadow: "rgba(0, 0, 0, 0.45)",
    ring: "#9F1239",

    chart1: "#9F1239",
    chart2: "#6D9F6D",
    chart3: "#C49050",
    chart4: "#E11D48",
    chart5: "#FDA4AF",

    temperature: {
      arcFill: ["#521C30", "#7F2848", "#9F1239", "#E11D48", "#FDA4AF"],
      arcEmpty: "#3F1525",
      thumbBg: "#2D0F1A",
      thumbBorder: "#9F1239",
    },

    solar: {
      gradientLeft: "#9F1239",
      gradientRight: "#E11D48",
      shadowColor: "rgba(159, 18, 57, 0.3)",
      secondSeriesFill: "#3F1525",
    },

    traffic: {
      tooltipBg: "#3F1525",
      tooltipBorderColor: "#7F2848",
      tooltipTextColor: "#FFF1F2",
      yAxisSplitLine: "#3F1525",
      lineBg: "#521C30",
      itemColor: "#521C30",
      itemBorderColor: "#7F2848",
      itemEmphasisBorderColor: "#9F1239",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
      shadowLineShadow: "rgba(0, 0, 0, 0)",
      gradFrom: "#3F1525",
      gradTo: "#2D0F1A",
    },

    electricity: {
      tooltipBg: "#3F1525",
      tooltipLineColor: "#FFF1F2",
      tooltipBorderColor: "#7F2848",
      tooltipTextColor: "#FFF1F2",
      axisLineColor: "#521C30",
      xAxisTextColor: "#D4899A",
      yAxisSplitLine: "#3F1525",
      itemBorderColor: "#9F1239",
      lineGradFrom: "#9F1239",
      lineGradTo: "#E11D48",
      lineShadow: "rgba(159, 18, 57, 0.3)",
      areaGradFrom: "rgba(159, 18, 57, 0.12)",
      areaGradTo: "rgba(159, 18, 57, 0.02)",
      shadowLineDarkBg: "rgba(0, 0, 0, 0)",
    },

    echarts: {
      bg: "#1A0810",
      textColor: "#FFF1F2",
      axisLineColor: "#7F2848",
      splitLineColor: "#3F1525",
      itemHoverShadowColor: "rgba(159, 18, 57, 0.35)",
      tooltipBackgroundColor: "#3F1525",
    },

    chartjs: {
      axisLineColor: "#521C30",
      textColor: "#FFF1F2",
    },
  },
};
