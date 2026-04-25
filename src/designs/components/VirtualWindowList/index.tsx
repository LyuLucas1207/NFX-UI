/**
 * 窗口虚拟列表：基于 useWindowVirtualizer，相对视口滚动。Window virtual list; uses useWindowVirtualizer, scroll relative to viewport.
 *
 * @example
 * ```tsx
 * * 与无限列表数据配合
 * <VirtualWindowList
 *   data={items}
 *   getItemKey={(item) => item.id}
 *   renderItem={(item) => <Row item={item} />}
 *   hasNextPage={hasNextPage}
 *   fetchNextPage={fetchNextPage}
 * />
 * ```
 */
import type { VirtualizerOptions } from "@tanstack/react-virtual";
import type { ReactNode } from "react";

import { memo, useCallback, useEffect } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";

import styles from "./styles.module.css";

export interface VirtualWindowListProps<T> extends Partial<
  Omit<
    VirtualizerOptions<Window, Element>,
    "count" | "getScrollElement" | "observeElementRect" | "observeElementOffset" | "scrollToFn" | "estimateSize" | "getItemKey"
  >
> {
  /** 数据列表。Data array. */
  data: T[];
  /** 是否有下一页。Has next page. */
  hasNextPage?: boolean;
  /** 是否正在拉取下一页。Is fetching next page. */
  isFetchingNextPage?: boolean;
  /** 拉取下一页。Fetch next page. */
  fetchNextPage?: () => void;
  /** 单项渲染。Render item. */
  renderItem: (item: T, index: number) => ReactNode;
  /** 单项高度估计。Estimate item size. */
  estimateSize?: number | ((index: number) => number);
  /** 列表高度。List height. */
  height?: string | number;
  /** 单项 key。Get item key. */
  getItemKey: (item: T, index: number) => string | number;
  /** 空状态自定义节点。Empty state node. */
  emptyState?: ReactNode;
  /** 加载更多指示器。Loading indicator node. */
  loadingIndicator?: ReactNode;
  /** 列表底指示器。End of list indicator node. */
  endOfListIndicator?: ReactNode;
  /** 空状态文案（未提供 emptyState 时）。Empty text. */
  emptyText?: ReactNode;
  /** 加载更多文案。Loading more text. */
  loadingMoreText?: ReactNode;
  /** 列表底文案。End of list text. */
  endOfListText?: ReactNode;
  /** 列表项容器 className。Flex container class. */
  flexClass?: string;
  /** 外层容器 className。Outer class. */
  outerClass?: string;
  /** 内层容器 className。Inner class. */
  innerClass?: string;
}

/* -------------------------------------------
 ✅ MAIN COMPONENT
-------------------------------------------- */
function VirtualWindowListComponent<T>({
  data,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  renderItem,
  estimateSize = 200,
  overscan = 5,
  height,
  getItemKey,

  emptyState,
  loadingIndicator,
  endOfListIndicator,
  emptyText = "No data",
  loadingMoreText = "Loading more...",
  endOfListText = "No more items",
  flexClass,
  outerClass,
  innerClass,
  ...virtualizerOptions
}: VirtualWindowListProps<T>) {
  /* ✅ 防御性检查：确保 data 是数组 */
  const safeData = Array.isArray(data) ? data : [];
  const dataLength = safeData.length;

  /* ✅ 真正的 window 虚拟滚动器 */
  const virtualizer = useWindowVirtualizer({
    count: hasNextPage ? dataLength + 1 : dataLength,
    estimateSize: typeof estimateSize === "number" ? () => estimateSize : estimateSize,
    overscan,
    ...virtualizerOptions,
  });

  const items = virtualizer.getVirtualItems();

  /* ✅ 自动加载更多 */
  useEffect(() => {
    const last = items[items.length - 1];
    if (!last) return;

    const isLoaderRow = last.index >= dataLength;

    if (isLoaderRow && hasNextPage && !isFetchingNextPage && fetchNextPage) {
      fetchNextPage();
    }
  }, [items, hasNextPage, isFetchingNextPage, fetchNextPage, dataLength]);

  const renderEmptyState = useCallback(() => {
    return (
      <div
        className={styles.virtualList}
        style={{
          height: typeof height === "number" ? `${height}px` : (height ?? "auto"),
        }}
      >
        {emptyState ?? (
          <div className={styles.emptyContainer}>
            <span>{emptyText}</span>
          </div>
        )}
      </div>
    );
  }, [emptyState, height, emptyText]);

  const renderLoadingIndicator = useCallback(() => {
    return (
      loadingIndicator ?? (
        <div className={styles.loadingMore}>
          <span>{loadingMoreText}</span>
        </div>
      )
    );
  }, [loadingIndicator, loadingMoreText]);

  const renderEndOfListIndicator = useCallback(() => {
    return (
      endOfListIndicator ?? (
        <div className={styles.endOfList}>
          <span>{endOfListText}</span>
        </div>
      )
    );
  }, [endOfListIndicator, endOfListText]);

  /* ✅ 无数据情况 */
  if (dataLength === 0) return renderEmptyState();

  /* ✅ 正常渲染 */
  return (
    <div className={`${styles.virtualList} ${outerClass ?? ""}`}>
      <div
        className={`${styles.virtualListInner} ${innerClass ?? ""}`}
        style={{
          height: virtualizer.getTotalSize(),
        }}
      >
        <div
          className={`${styles.virtualListItems} ${flexClass ?? ""}`}
          style={{
            transform: `translateY(${items[0]?.start ?? 0}px)`,
          }}
        >
          {items.map((row) => {
            const isLoaderRow = row.index >= dataLength;
            const item = safeData[row.index];

            return (
              <div key={row.key} data-index={row.index} ref={virtualizer.measureElement}>
                {isLoaderRow ? (
                  hasNextPage ? (
                    renderLoadingIndicator()
                  ) : (
                    renderEndOfListIndicator()
                  )
                ) : item == null ? (
                  <div key={`missing-${row.index}`} />
                ) : (
                  <div key={getItemKey(item, row.index)}>{renderItem(item, row.index)}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const VirtualWindowList = memo(VirtualWindowListComponent) as typeof VirtualWindowListComponent;

export default VirtualWindowList;
