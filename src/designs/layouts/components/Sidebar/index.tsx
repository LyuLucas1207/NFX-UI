import type { SidebarMenuItem, SidebarProps } from "../../types";

import { memo, useCallback, useMemo } from "react";
import { Menu, MenuItem, Sidebar as ProSidebar, SubMenu } from "react-pro-sidebar";

import { LogOut } from "@/icons/lucide";

import styles from "./styles.module.css";

/**
 * 当前路径是否命中该菜单项。
 * 若有 siblingPaths（同组子项路径），则只有当前路径精确等于 path 或匹配 path 下的详情（非其它子项）时才命中，避免 /categories 与 /categories/add 同时高亮。
 */
function isPathActive(current: string, path: string, siblingPaths?: string[]): boolean {
  if (current === path) return true;
  if (!current.startsWith(path + "/")) return false;
  if (siblingPaths?.length) {
    const matchedSibling = siblingPaths.some((s) => s !== path && (current === s || current.startsWith(s + "/")));
    if (matchedSibling) return false;
  }
  return true;
}

function isSubMenuActive(current: string, item: SidebarMenuItem): boolean {
  if (isPathActive(current, item.path, item.children?.map((c) => c.path))) return true;
  if (!item.children) return false;
  return item.children.some((child) => isPathActive(current, child.path, item.children?.map((c) => c.path)) || isSubMenuActive(current, child));
}

const Sidebar = memo(
  ({
    children,
    collapsed = false,
    toggled = false,
    onBackdropClick,
    breakPoint = "all",
    className,
    items = [],
    currentPathname = "",
    onNavigate,
    logoutLabel = "Logout",
    handleLogout,
    bottomLogoutButton,
    headerHeight,
  }: SidebarProps) => {
    const handleItemClick = useCallback(
      (path: string) => {
        onNavigate?.(path);
      },
      [onNavigate],
    );

    const renderItem = useCallback(
      (item: SidebarMenuItem, siblingPaths?: string[]) => {
        const active = isPathActive(currentPathname, item.path, siblingPaths);
        if (item.children?.length) {
          const subActive = isSubMenuActive(currentPathname, item);
          return (
            <SubMenu key={item.path} label={item.label} icon={item.icon} active={subActive}>
              {item.children.map((child) => renderItem(child, item.children!.map((c) => c.path)))}
            </SubMenu>
          );
        }
        return (
          <MenuItem key={item.path} icon={item.icon} onClick={() => handleItemClick(item.path)} active={active}>
            {item.label}
          </MenuItem>
        );
      },
      [currentPathname, handleItemClick],
    );

    const menuContent =
      items.length > 0 ? (
        <Menu
          key={`${collapsed}-${toggled}`}
          transitionDuration={300}
          closeOnClick
          menuItemStyles={{
            button: {
              color: "var(--color-fg-text)",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "var(--color-bg-3)",
                color: "var(--color-fg-text)",
              },
              "&.active": {
                backgroundColor: "var(--color-primary)",
                color: "var(--color-primary-fg)",
              },
            },
            icon: {
              color: "var(--color-fg-text)",
              "&.active": {
                color: "var(--color-primary-fg)",
              },
            },
            label: {
              color: "var(--color-fg-text)",
              "&.active": {
                color: "var(--color-primary-fg)",
              },
            },
          }}
        >
          {items.map((item) => renderItem(item))}
        </Menu>
      ) : null;

    const bottomLogoutButtonContent = useMemo(() => {
      if (bottomLogoutButton != null) return bottomLogoutButton;
      if (handleLogout != null) {
        return (
          <div className={styles.logoutContainer}>
            <button type="button" className={styles.logoutButton} onClick={handleLogout} title={logoutLabel}>
              <LogOut size={20} />
              <span className={collapsed ? styles.hiddenText : styles.visibleText}>{logoutLabel}</span>
            </button>
          </div>
        );
      }
      return null;
    }, [collapsed, logoutLabel, handleLogout, bottomLogoutButton]);

    return (
      <ProSidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={onBackdropClick}
        breakPoint={breakPoint}
        backgroundColor="var(--color-bg-2)"
        rootStyles={{
          border: "none",
          marginTop: `${headerHeight}px`,
          borderRight: "1px solid var(--color-separator)",
        }}
        className={`${styles.sidebar} ${className || ""}`}
      >
        <div className={styles.sidebarContent} onWheel={(e) => e.stopPropagation()}>
          <div className={styles.menuWrapper}>{children ?? menuContent}</div>
          {bottomLogoutButtonContent}
        </div>
      </ProSidebar>
    );
  },
);

Sidebar.displayName = "Sidebar";
export default Sidebar;
