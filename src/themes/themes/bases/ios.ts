import type { BaseTheme, BaseVariables } from "../../types";

import { BaseEnum } from "../../types";

/** iOS 风格圆角（偏大，贴近系统控件 / sheet 的圆滑感） */
export const iosBaseVariables: BaseVariables = {
  radius: {
    button: 16,
    card: 28,
    input: 16,
    modal: 34,
    badge: 999,
    avatar: 22,
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    page: 24,
    card: 20,
    sectionGap: 28,
    gridGap: 20,
  },

  border: {
    thin: 1,
    base: 1,
    thick: 2,
    focusRing: 3,
  },

  size: {
    buttonSm: 32,
    buttonMd: 40,
    buttonLg: 48,
    inputSm: 32,
    inputMd: 40,
    inputLg: 48,
    navbarHeight: 60,
    sidebarWidth: 280,
  },

  typography: {
    fontFamilyBase: `-apple-system, "SF Pro Text", "Inter", sans-serif`,
    fontFamilyHeading: `-apple-system, "SF Pro Display", "Inter", sans-serif`,
    fontSizeXs: 12,
    fontSizeSm: 13,
    fontSizeMd: 15,
    fontSizeLg: 17,
    fontSizeXl: 22,
    fontWeightNormal: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    lineHeightBase: 1.45,
  },

  motion: {
    fast: 160,
    base: 240,
    slow: 320,
    easingStandard: "cubic-bezier(0.32, 0.72, 0, 1)",
  },

  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    modal: 1100,
    toast: 1200,
    tooltip: 1300,
  },
};

export const iosBaseTheme: BaseTheme = {
  name: BaseEnum.IOS,
  displayName: "iOS",
  variables: iosBaseVariables,
};
