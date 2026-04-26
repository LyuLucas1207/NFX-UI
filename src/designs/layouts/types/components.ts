/**
 * 布局相关组件的 Props 类型。Props types for layout-related components.
 */
import type { ReactNode } from "react";
import type { SidebarProps as ProSidebarProps } from "react-pro-sidebar";
import type { LayoutModeEnum } from "./layout";

/** 侧栏菜单项。Sidebar menu item. */
export interface SidebarMenuItem {
  label: string;
  path: string;
  icon: ReactNode;
  /** Sub-items for SubMenu. Omit for a leaf item. */
  children?: SidebarMenuItem[];
}

/** 布局 Provider 的 props。LayoutProvider props. */
export interface LayoutProviderProps {
  /** 子节点。Children. */
  children: ReactNode;
  /** 默认布局模式（显示/隐藏侧栏）。Default layout mode (show/hide sidebar). */
  defaultLayoutMode?: LayoutModeEnum;
}

/** 布局切换器 props。LayoutSwitcher props. */
export interface LayoutSwitcherProps {
  /** 样式状态。Visual status. */
  status?: "primary" | "default";
  /** 显示模式标签（未传 getLayoutDisplayName 且无内置翻译时使用）。Show mode label. */
  showLabel?: string;
  /** 隐藏模式标签（未传 getLayoutDisplayName 且无内置翻译时使用）。Hide mode label. */
  hideLabel?: string;
  /** 根据布局模式返回展示名；未传则使用 showLabel / hideLabel。Display name for layout mode; default uses showLabel/hideLabel. */
  getLayoutDisplayName?: (mode: LayoutModeEnum) => string;
  /** 处理布局模式改变。Handle layout mode change. */
  handleChangeLayoutMode?: (mode: LayoutModeEnum) => void;
}

/** LayoutFrame props. */
export interface LayoutFrameProps {
  children: ReactNode;
  /** 可选：Header 左侧内容（如 Logo、SlideDownSwitcher），使用方传入。Optional: header left slot. */
  headerLeft?: ReactNode;
  /** 可选：Header 右侧内容（如语言、用户菜单），使用方传入。Optional: header right slot. */
  headerRight?: ReactNode;
  /** 可选：Footer 内容（children），使用方传入。Optional: footer content. */
  footerContent?: ReactNode;
  /** 可选：侧栏菜单项。Optional: sidebar menu items. */
  sidebarItems?: SidebarMenuItem[];
  /** 可选：当前路径，用于高亮。传 useLocation().pathname。Optional: current pathname for active state. */
  sidebarCurrentPathname?: string;
  /** 可选：点击菜单项时调用。Optional: called when a sidebar item is clicked. */
  onSidebarNavigate?: (path: string) => void;
  /** 可选：侧栏底部登出按钮文案。Optional: logout button label. */
  sidebarLogoutLabel?: string;
  /** 可选：侧栏登出回调。Optional: logout handler. */
  onSidebarLogout?: () => void;
  /** 可选：侧栏底部登出按钮。Optional: bottom logout button. */
  bottomLogoutButton?: ReactNode;
}

/** Sidebar props（扩展 react-pro-sidebar）. */
export interface SidebarProps extends ProSidebarProps {
  children?: ReactNode;
  collapsed?: boolean;
  toggled?: boolean;
  onBackdropClick?: () => void;
  className?: string;
  /** Menu items. Rendered when no children. */
  items?: SidebarMenuItem[];
  /** Current pathname for active state. Pass from useLocation().pathname. */
  currentPathname?: string;
  /** Called when a menu item is clicked. Parent should navigate to path. */
  onNavigate?: (path: string) => void;
  /** Logout label. */
  logoutLabel?: string;
  /** Handle logout. */
  handleLogout?: () => void;
  /** Bottom Logout Button. */
  bottomLogoutButton?: ReactNode;
}

/** MainWrapper props. */
export interface MainWrapperProps {
  children: (headerHeight: number, footerHeight: number) => ReactNode;
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
  footerContent?: ReactNode;
}

/** SideHideLayout props. */
export interface SideHideLayoutProps {
  children: ReactNode;
  headerHeight: number;
  footerHeight: number;
  sidebarItems?: SidebarMenuItem[];
  sidebarCurrentPathname?: string;
  onSidebarNavigate?: (path: string) => void;
  sidebarLogoutLabel?: string;
  onSidebarLogout?: () => void;
  bottomLogoutButton?: ReactNode;
}

/** SideShowLayout props. */
export interface SideShowLayoutProps {
  children: ReactNode;
  headerHeight: number;
  footerHeight: number;
  sidebarItems?: SidebarMenuItem[];
  sidebarCurrentPathname?: string;
  onSidebarNavigate?: (path: string) => void;
  sidebarLogoutLabel?: string;
  onSidebarLogout?: () => void;
  bottomLogoutButton?: ReactNode;
}

/** Footer props. */
export interface FooterProps {
  /** 页脚内容由使用方传入。Footer content passed from parent. */
  children?: ReactNode;
  className?: string;
}

/** Header props. */
export interface HeaderProps {
  /** 左侧内容（如 Logo、SlideDownSwitcher 等），由使用方传入。Left slot; passed from parent. */
  leftContent?: ReactNode;
  /** 右侧内容（如语言切换、用户菜单等），由使用方传入。Right slot; passed from parent. */
  rightContent?: ReactNode;
}
