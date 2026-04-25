/**
 * 统一 Suspense 包装：QueryErrorResetBoundary + 自定义 Loading/Error 样式，支持 loadingType、errorFallback。Suspense wrapper with QueryErrorResetBoundary, custom loading/error UI.
 *
 * @example
 * ```tsx
 * * 包裹懒加载内容
 * <Suspense fallback={null}>
 *   <LazyPage />
 * </Suspense>
 * * 自定义 loading 类型
 * <Suspense loadingType="bounce" loadingShape="circle">...</Suspense>
 * ```
 */
import type { QueryErrorResetBoundaryProps } from "@tanstack/react-query";
import type { ReactNode, SuspenseProps as ReactSuspenseProps } from "react";

import { memo, Suspense as ReactSuspense } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";

import BounceLoading from "@/designs/animations/BounceLoading";
import ECGLoading from "@/designs/animations/ECGLoading";
import TruckLoading from "@/designs/animations/TruckLoading";
import { AlertCircle } from "@/icons/lucide";

import styles from "./styles.module.css";
import SuspenseErrorBoundary from "./SuspenseErrorBoundary";

interface LoadingFallbackProps {
  /** 自定义 fallback 节点。Custom fallback node. */
  fallback?: ReactNode;
  /** 加载动画类型。Loading animation type. */
  loadingType?: "ecg" | "truck" | "bounce";
  /** 加载图形形状。Loading shape. */
  loadingShape?: "square" | "circle";
  /** 加载中文案。Loading text. */
  loadingText?: ReactNode;
  /** 加载图尺寸。Loading size. */
  loadingSize?: "small" | "medium" | "large";
  /** 容器 className。Container className. */
  loadingContainerClassName?: string;
  /** 文案 className。Text className. */
  loadingTextClassName?: string;
  /** 加载图 className。Loading className. */
  loadingClassName?: string;
}

interface ErrorFallbackProps {
  /** 错误对象。Error object. */
  error: Error | null;
  /** 重试函数。Retry function. */
  retry: () => void;
  /** 自定义错误 UI。Custom error UI. */
  errorFallback?: (args: { error: Error | null; retry: () => void }) => ReactNode;
  /** 错误标题。Error title. */
  errorTitle?: ReactNode;
  /** 错误描述。Error description. */
  errorDescription?: ReactNode;
  /** 重试按钮文案。Retry button text. */
  retryText?: ReactNode;
  /** 详情折叠文案。Error details summary text. */
  errorDetailsText?: ReactNode;
  /** 清除本地数据按钮文案。Clear local data button text. */
  clearLocalDataText?: ReactNode;
  /** 点击「清除本地数据」后执行（如跳转登录页），由调用方传入。Called after clear local data (e.g. navigate to login); pass from caller. */
  onClearLocalData?: () => void;
  /** 错误容器 className。Error container className. */
  errorContainerClassName?: string;
  /** 错误详情 className。Error details className. */
  errorDetailsClassName?: string;
  /** 是否展示错误详情。Show error details. */
  showErrorDetails?: boolean;
}

export interface SuspenseProps extends Omit<ReactSuspenseProps, "fallback">, Omit<QueryErrorResetBoundaryProps, "children"> {
  /** 自定义 fallback。Custom fallback. */
  fallback?: ReactNode;
  /** 测试用：始终挂起。Test: always suspend. */
  test?: boolean;
  /** 加载动画类型。Loading type. */
  loadingType?: "ecg" | "truck" | "bounce";
  /** 加载图形形状。Loading shape. */
  loadingShape?: "square" | "circle";
  /** 加载中文案，由调用方传入。Loading text; pass from caller (e.g. i18n). */
  loadingText?: ReactNode;
  /** 加载图尺寸。Loading size. */
  loadingSize?: "small" | "medium" | "large";
  /** 加载容器 className。Loading container className. */
  loadingContainerClassName?: string;
  /** 加载文案 className。Loading text className. */
  loadingTextClassName?: string;
  /** 加载图 className。Loading className. */
  loadingClassName?: string;
  /** 自定义错误 UI。Custom error fallback. */
  errorFallback?: (args: { error: Error | null; retry: () => void }) => ReactNode;
  /** 错误标题，由调用方传入。Error title; pass from caller. */
  errorTitle?: ReactNode;
  /** 错误描述，由调用方传入。Error description; pass from caller. */
  errorDescription?: ReactNode;
  /** 重试按钮文案，由调用方传入。Retry text; pass from caller. */
  retryText?: ReactNode;
  /** 错误详情折叠文案。Error details text. */
  errorDetailsText?: ReactNode;
  /** 清除本地数据按钮文案。Clear local data text. */
  clearLocalDataText?: ReactNode;
  /** 点击「清除本地数据」后执行（如跳转登录页），由调用方传入。Called after clear local data (e.g. navigate to login); pass from caller. */
  onClearLocalData?: () => void;
  /** 错误容器 className。Error container className. */
  errorContainerClassName?: string;
  /** 错误详情 className。Error details className. */
  errorDetailsClassName?: string;
  /** 是否展示错误详情。Show error details. */
  showErrorDetails?: boolean;
}

const LoadingFallback = memo(
  ({
    fallback,
    loadingType = "ecg",
    loadingShape = "square",
    loadingText = "Loading...",
    loadingSize = "medium",
    loadingContainerClassName,
    loadingTextClassName,
    loadingClassName,
  }: LoadingFallbackProps) => {
    if (fallback) {
      return <>{fallback}</>;
    }

    const renderLoading = () => {
      switch (loadingType) {
        case "ecg":
          return <ECGLoading size={loadingSize} className={loadingClassName} />;
        case "truck":
          return <TruckLoading size={loadingSize} className={loadingClassName} />;
        case "bounce":
          return <BounceLoading size={loadingSize} shape={loadingShape} className={loadingClassName} />;
        default:
          return <ECGLoading size={loadingSize} className={loadingClassName} />;
      }
    };

    return (
      <div className={`${styles.loadingContainer} ${loadingContainerClassName || ""}`}>
        {renderLoading()}
        <p className={`${styles.loadingText} ${loadingTextClassName || ""}`}>{loadingText}</p>
      </div>
    );
  },
);

LoadingFallback.displayName = "LoadingFallback";

const ErrorFallback = memo(
  ({
    error,
    retry,
    errorFallback,
    errorTitle = "Error",
    errorDescription = "Something went wrong. Please try again.",
    retryText = "Retry",
    errorDetailsText = "Details",
    clearLocalDataText = "Clear local data",
    onClearLocalData,
    errorContainerClassName,
    errorDetailsClassName,
    showErrorDetails = import.meta.env.DEV,
  }: ErrorFallbackProps) => {
    const handleClearLocalData = () => {
      try {
        sessionStorage.clear();
      } catch {
        // ignore
      } finally {
        onClearLocalData?.();
      }
    };

    if (errorFallback) {
      return <>{errorFallback({ error, retry })}</>;
    }

    return (
      <div className={`${styles.errorContainer} ${errorContainerClassName || ""}`}>
        <div className={styles.errorIconWrapper}>
          <AlertCircle className={styles.errorIcon} size={64} />
        </div>
        <div className={styles.errorContent}>
          <h3 className={styles.errorTitle}>{errorTitle}</h3>
          <p className={styles.errorDescription}>{errorDescription}</p>
          {showErrorDetails && error && (
            <div className={styles.errorDetailsWrapper}>
              <details className={styles.errorDetailsContainer}>
                <summary className={styles.errorDetailsSummary}>{errorDetailsText}</summary>
                <pre className={`${styles.errorDetails} ${errorDetailsClassName || ""}`}>{error.message}</pre>
              </details>
            </div>
          )}
          <div className={styles.errorActions}>
            <button type="button" className={styles.retryButton} onClick={retry}>
              <span className={styles.retryButtonIcon}>↻</span>
              <span>{retryText}</span>
            </button>
            <button type="button" className={styles.clearLocalDataButton} onClick={handleClearLocalData}>
              <span>{clearLocalDataText}</span>
            </button>
          </div>
        </div>
      </div>
    );
  },
);

ErrorFallback.displayName = "ErrorFallback";

const Suspense = memo(
  ({
    fallback,
    test,
    loadingType = "ecg",
    loadingShape = "square",
    loadingClassName,
    loadingText,
    loadingSize = "medium",
    loadingContainerClassName,
    loadingTextClassName,
    children,
    errorFallback,
    errorTitle,
    errorDescription,
    retryText,
    errorDetailsText,
    clearLocalDataText,
    onClearLocalData,
    errorContainerClassName,
    errorDetailsClassName,
    showErrorDetails = import.meta.env.DEV,
    ...restProps
  }: SuspenseProps) => {
    return (
      <QueryErrorResetBoundary {...restProps}>
        {({ reset }) => (
          <SuspenseErrorBoundary
            onReset={reset}
            fallbackRender={({ error, retry }) => (
              <ErrorFallback
                error={error}
                retry={retry}
                errorFallback={errorFallback}
                errorTitle={errorTitle}
                errorDescription={errorDescription}
                retryText={retryText}
                errorDetailsText={errorDetailsText}
                clearLocalDataText={clearLocalDataText}
                onClearLocalData={onClearLocalData}
                errorContainerClassName={errorContainerClassName}
                errorDetailsClassName={errorDetailsClassName}
                showErrorDetails={showErrorDetails}
              />
            )}
          >
            <ReactSuspense
              fallback={
                <LoadingFallback
                  fallback={fallback}
                  loadingType={loadingType}
                  loadingShape={loadingShape}
                  loadingText={loadingText}
                  loadingSize={loadingSize}
                  loadingContainerClassName={loadingContainerClassName}
                  loadingTextClassName={loadingTextClassName}
                  loadingClassName={loadingClassName}
                />
              }
              {...restProps}
            >
              {test ? <AlwaysPending /> : children}
            </ReactSuspense>
          </SuspenseErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    );
  },
);

Suspense.displayName = "Suspense";
export default Suspense;

const AlwaysPending = () => {
  throw new Promise(() => {}); // 永不 resolve 的 Promise
};
