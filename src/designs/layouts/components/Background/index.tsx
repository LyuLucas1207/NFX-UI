import type { ReactNode } from "react";

import { Suspense, lazy, memo } from "react";

import { LetterGlitchBackground, SquareBackground, WaveBackground } from "@/designs/animations";
import { DashboardBackgroundEnum } from "@/preference";

import styles from "./styles.module.css";

const LazyPixelBlast = lazy(() => import("@/designs/animations/PixelBlast"));

interface BackgroundProps {
  children: ReactNode;
  /** 可选：外部传入的偏好，有则优先使用；否则从 profile.preference 解析。Optional: preference from parent; otherwise parsed from profile. */
  background?: DashboardBackgroundEnum | null;
}

/** 与 NFX-Identity/console 一致：仪表盘背景由用户偏好（可外部传入或从 profile 解析） */
const Background = memo(({ children, background }: BackgroundProps) => {
  const renderBackground = () => {
    switch (background) {
      case DashboardBackgroundEnum.WAVES:
        return (
          <div className={styles.wavesWrapper}>
            <WaveBackground />
          </div>
        );
      case DashboardBackgroundEnum.SQUARES:
        return (
          <div className={styles.squaresWrapper}>
            <SquareBackground />
          </div>
        );
      case DashboardBackgroundEnum.LETTER_GLITCH:
        return (
          <div className={styles.letterGlitchWrapper}>
            <LetterGlitchBackground />
          </div>
        );
      case DashboardBackgroundEnum.PIXEL_BLAST:
        return (
          <Suspense fallback={null}>
            <div className={styles.pixelBlastWrapper}>
              <LazyPixelBlast />
            </div>
          </Suspense>
        );
      case DashboardBackgroundEnum.NONE:
      default:
        return null;
    }
  };

  return (
    <>
      {children}
      {renderBackground()}
    </>
  );
});

Background.displayName = "Background";
export default Background;
export type { BackgroundProps };
