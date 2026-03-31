import type { Theme, ThemeEnum } from "../types";
import { setThemeColorStorage } from "../utils";
import { useEffect } from "react";

/**
 * 将当前主题变量注入到 document 的 CSS Variables，并持久化主题名到 localStorage。
 * Injects current theme variables into document CSS custom properties and persists theme name to localStorage.
 *
 * @param currentTheme - 完整主题对象（颜色 + 基础）。Full theme (colors + base).
 * @param themeName - 当前主题枚举名，用于持久化。Current theme enum key for persistence.
 */
const useThemeVariables = (currentTheme: Theme, themeName: ThemeEnum) => {
  useEffect(() => {
    const root = document.documentElement;
    const vars = currentTheme.colors.variables;
    const base = currentTheme.base.variables;

    // 主色与语义色 / Primary and semantic colors
    root.style.setProperty("--color-primary", vars.primary);
    root.style.setProperty("--color-primary-hover", vars.primaryHover);
    root.style.setProperty("--color-primary-light", vars.primaryLight);
    root.style.setProperty("--color-primary-bg", vars.primaryBg);
    root.style.setProperty("--color-primary-rgb", vars.primaryRgb);
    root.style.setProperty("--color-primary-transparent", vars.primaryTransparent);
    root.style.setProperty("--color-primary-alpha", vars.primaryTransparent);
    root.style.setProperty("--color-primary-fg", vars.primaryFg);
    root.style.setProperty("--color-success", vars.success);
    root.style.setProperty("--color-success-light", vars.successLight);
    root.style.setProperty("--color-success-rgb", vars.successRgb);
    root.style.setProperty("--color-info", vars.info);
    root.style.setProperty("--color-info-light", vars.infoLight);
    root.style.setProperty("--color-info-rgb", vars.infoRgb);
    root.style.setProperty("--color-warning", vars.warning);
    root.style.setProperty("--color-warning-light", vars.warningLight);
    root.style.setProperty("--color-warning-rgb", vars.warningRgb);
    root.style.setProperty("--color-danger", vars.danger);
    root.style.setProperty("--color-danger-light", vars.dangerLight);
    root.style.setProperty("--color-danger-rgb", vars.dangerRgb);
    root.style.setProperty("--color-error", vars.danger);
    root.style.setProperty("--color-error-rgb", vars.dangerRgb);

    // 背景色 / Background
    root.style.setProperty("--color-bg", vars.bg);
    root.style.setProperty("--color-bg-1", vars.bg);
    root.style.setProperty("--color-bg-2", vars.bg2);
    root.style.setProperty("--color-bg-3", vars.bg3);
    root.style.setProperty("--color-bg-4", vars.bg4);
    root.style.setProperty("--color-bg-secondary", vars.bgSecondary);

    // 边框色 / Border
    root.style.setProperty("--color-border", vars.border);
    root.style.setProperty("--color-border-2", vars.border2);
    root.style.setProperty("--color-border-3", vars.border3);
    root.style.setProperty("--color-border-4", vars.border4);
    root.style.setProperty("--color-border-5", vars.border5);
    root.style.setProperty("--color-border-hover", vars.borderHover);

    // 文字色 / Foreground text
    root.style.setProperty("--color-fg", vars.fg);
    root.style.setProperty("--color-fg-text", vars.fgText);
    root.style.setProperty("--color-fg-heading", vars.fgHeading);
    root.style.setProperty("--color-fg-highlight", vars.fgHighlight);
    root.style.setProperty("--color-fg-muted", vars.fgMuted);
    root.style.setProperty("--color-fg-on-primary", vars.fgOnPrimary);
    root.style.setProperty("--color-separator", vars.separator);

    // 遮罩 / 阴影 / 焦点环
    root.style.setProperty("--color-overlay", vars.overlay);
    root.style.setProperty("--color-shadow", vars.shadow);
    root.style.setProperty("--color-ring", vars.ring);

    // 通用图表系列色
    root.style.setProperty("--color-chart-1", vars.chart1);
    root.style.setProperty("--color-chart-2", vars.chart2);
    root.style.setProperty("--color-chart-3", vars.chart3);
    root.style.setProperty("--color-chart-4", vars.chart4);
    root.style.setProperty("--color-chart-5", vars.chart5);

    // 基础变量（圆角等）/ Base (radius, etc.)
    root.style.setProperty("--radius-button", `${base.buttonRadius}px`);
    root.style.setProperty("--radius-card", `${base.cardRadius}px`);
    root.style.setProperty("--radius-input", `${base.inputRadius}px`);

    // Temperature
    vars.temperature.arcFill.forEach((v: string, i: number) => {
      root.style.setProperty(`--temperature-arc-fill-${i}`, v);
    });
    root.style.setProperty("--temperature-arc-empty", vars.temperature.arcEmpty);
    root.style.setProperty("--temperature-thumb-bg", vars.temperature.thumbBg);
    root.style.setProperty("--temperature-thumb-border", vars.temperature.thumbBorder);

    // Solar
    root.style.setProperty("--solar-gradient-left", vars.solar.gradientLeft);
    root.style.setProperty("--solar-gradient-right", vars.solar.gradientRight);
    root.style.setProperty("--solar-shadow-color", vars.solar.shadowColor);
    root.style.setProperty("--solar-second-series-fill", vars.solar.secondSeriesFill);

    // Traffic
    root.style.setProperty("--traffic-tooltip-bg", vars.traffic.tooltipBg);
    root.style.setProperty("--traffic-tooltip-border-color", vars.traffic.tooltipBorderColor);
    root.style.setProperty("--traffic-tooltip-text-color", vars.traffic.tooltipTextColor);
    root.style.setProperty("--traffic-y-axis-split-line", vars.traffic.yAxisSplitLine);
    root.style.setProperty("--traffic-line-bg", vars.traffic.lineBg);
    root.style.setProperty("--traffic-item-color", vars.traffic.itemColor);
    root.style.setProperty("--traffic-item-border-color", vars.traffic.itemBorderColor);
    root.style.setProperty("--traffic-item-emphasis-border-color", vars.traffic.itemEmphasisBorderColor);
    root.style.setProperty("--traffic-shadow-line-dark-bg", vars.traffic.shadowLineDarkBg);
    root.style.setProperty("--traffic-shadow-line-shadow", vars.traffic.shadowLineShadow);
    root.style.setProperty("--traffic-grad-from", vars.traffic.gradFrom);
    root.style.setProperty("--traffic-grad-to", vars.traffic.gradTo);

    // Electricity
    root.style.setProperty("--electricity-tooltip-bg", vars.electricity.tooltipBg);
    root.style.setProperty("--electricity-tooltip-line-color", vars.electricity.tooltipLineColor);
    root.style.setProperty("--electricity-tooltip-border-color", vars.electricity.tooltipBorderColor);
    root.style.setProperty("--electricity-tooltip-text-color", vars.electricity.tooltipTextColor);
    root.style.setProperty("--electricity-axis-line-color", vars.electricity.axisLineColor);
    root.style.setProperty("--electricity-x-axis-text-color", vars.electricity.xAxisTextColor);
    root.style.setProperty("--electricity-y-axis-split-line", vars.electricity.yAxisSplitLine);
    root.style.setProperty("--electricity-item-border-color", vars.electricity.itemBorderColor);
    root.style.setProperty("--electricity-line-grad-from", vars.electricity.lineGradFrom);
    root.style.setProperty("--electricity-line-grad-to", vars.electricity.lineGradTo);
    root.style.setProperty("--electricity-line-shadow", vars.electricity.lineShadow);
    root.style.setProperty("--electricity-area-grad-from", vars.electricity.areaGradFrom);
    root.style.setProperty("--electricity-area-grad-to", vars.electricity.areaGradTo);
    root.style.setProperty("--electricity-shadow-line-dark-bg", vars.electricity.shadowLineDarkBg);

    // ECharts
    root.style.setProperty("--echarts-bg", vars.echarts.bg);
    root.style.setProperty("--echarts-text-color", vars.echarts.textColor);
    root.style.setProperty("--echarts-axis-line-color", vars.echarts.axisLineColor);
    root.style.setProperty("--echarts-split-line-color", vars.echarts.splitLineColor);
    root.style.setProperty("--echarts-item-hover-shadow-color", vars.echarts.itemHoverShadowColor);
    root.style.setProperty("--echarts-tooltip-bg-color", vars.echarts.tooltipBackgroundColor);

    // ChartJS
    root.style.setProperty("--chartjs-axis-line-color", vars.chartjs.axisLineColor);
    root.style.setProperty("--chartjs-text-color", vars.chartjs.textColor);

    setThemeColorStorage(themeName);
  }, [themeName, currentTheme]);
};

export default useThemeVariables;
