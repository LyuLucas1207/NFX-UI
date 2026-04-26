import type { SideHideLayoutProps } from "../../types";

import { memo, useCallback } from "react";

import useLayout from "../../hooks/useLayout";
import Sidebar from "../Sidebar";
import styles from "./styles.module.css";

const SideHideLayout = memo(
  ({
    children,
    headerHeight,
    footerHeight,
    sidebarItems,
    sidebarCurrentPathname,
    onSidebarNavigate,
    sidebarLogoutLabel,
    onSidebarLogout,
    bottomLogoutButton,
  }: SideHideLayoutProps) => {
    const { sidebarOpen, closeSidebar } = useLayout();

    const handleBackdropClick = useCallback(() => {
      closeSidebar();
    }, [closeSidebar]);

    return (
      <>
        <div
          className={styles.sidebarChrome}
          style={{
            top: `${headerHeight}px`,
            height: `calc(100vh - ${headerHeight + footerHeight}px)`,
          }}
        >
          <Sidebar
            toggled={sidebarOpen}
            onBackdropClick={handleBackdropClick}
            breakPoint="all"
            className={styles.sidebar}
            items={sidebarItems}
            currentPathname={sidebarCurrentPathname}
            onNavigate={onSidebarNavigate}
            logoutLabel={sidebarLogoutLabel}
            handleLogout={onSidebarLogout}
            bottomLogoutButton={bottomLogoutButton}
          />
        </div>
      <main
        className={styles.mainWrapper}
        style={{
          marginTop: `${headerHeight}px`,
          marginBottom: `${footerHeight}px`,
        }}
      >
        <div className={styles.content} data-lenis-prevent>
          {children}
        </div>
      </main>
      </>
    );
  },
);

SideHideLayout.displayName = "SideHideLayout";

export default SideHideLayout;
