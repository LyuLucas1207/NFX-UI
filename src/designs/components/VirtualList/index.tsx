/**
 * 虚拟列表：基于 @tanstack/react-virtual，支持无限滚动 fetchNextPage。Virtual list; @tanstack/react-virtual, fetchNextPage.
 *
 * @example
 * ```tsx
 * * 与 useInfiniteQuery 配合，data 为 pages 拍平后的 items
 * <VirtualList data={items} getItemKey={(i) => i.id} renderItem={(i) => <Row item={i} />} hasNextPage fetchNextPage={fetchNextPage} />
 * ```
 */
import type { VirtualizerOptions } from "@tanstack/react-virtual";
import type { ReactNode } from "react";

import { memo, useCallback, useEffect, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

import styles from "./styles.module.css";

export interface VirtualListProps<T> extends Partial<
  Omit<
    VirtualizerOptions<HTMLDivElement, Element>,
    "count" | "getScrollElement" | "observeElementRect" | "observeElementOffset" | "scrollToFn" | "getItemKey" | "estimateSize"
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
  /** 当未提供 emptyState 时使用的文案，由调用方传入。Text when no data; used when emptyState not provided. */
  emptyText?: ReactNode;
  /** 当未提供 loadingIndicator 时使用的文案。Text when loading more. */
  loadingMoreText?: ReactNode;
  /** 当未提供 endOfListIndicator 时使用的文案。Text at end of list. */
  endOfListText?: ReactNode;
  /** 列表项容器 className。Flex container class. */
  flexClass?: string;
  /** 外层容器 className。Outer class. */
  outerClass?: string;
  /** 内层容器 className。Inner class. */
  innerClass?: string;
}

function VirtualListComponent<T>({
  data,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  renderItem,
  estimateSize = 200,
  overscan = 5,
  height = "600px",
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
}: VirtualListProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);

  // 防御性检查：确保 data 是数组
  const safeData = Array.isArray(data) ? data : [];
  const dataLength = safeData.length;

  // Setup virtualizer
  // eslint-disable-next-line react-hooks/incompatible-library
  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? dataLength + 1 : dataLength,
    getScrollElement: () => parentRef.current,
    estimateSize: typeof estimateSize === "number" ? () => estimateSize : estimateSize,
    overscan,
    ...virtualizerOptions,
  });

  const items = rowVirtualizer.getVirtualItems();

  // Auto-fetch when scrolling near bottom (following official pattern)
  useEffect(() => {
    const [lastItem] = [...items].reverse();

    if (!lastItem) {
      return;
    }

    if (lastItem.index >= dataLength - 1 && hasNextPage && !isFetchingNextPage && fetchNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage, dataLength, isFetchingNextPage, items]);

  const renderEmptyState = useCallback(() => {
    return (
      <div
        className={styles.virtualList}
        style={{
          height: typeof height === "number" ? `${height}px` : height,
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
    if (loadingIndicator) return loadingIndicator;
    return (
      <div className={styles.loadingMore}>
        <span>{loadingMoreText}</span>
      </div>
    );
  }, [loadingIndicator, loadingMoreText]);

  const renderEndOfListIndicator = useCallback(() => {
    if (endOfListIndicator) return endOfListIndicator;
    return (
      <div className={styles.endOfList}>
        <span>{endOfListText}</span>
      </div>
    );
  }, [endOfListIndicator, endOfListText]);

  // Show empty state if no data
  if (dataLength === 0) return renderEmptyState();

  return (
    <div
      ref={parentRef}
      className={`${styles.virtualList} ${outerClass ?? ""}`}
      style={{
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      <div
        className={`${styles.virtualListInner} ${innerClass ?? ""}`}
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        <div
          className={`${styles.virtualListItems} ${flexClass ?? ""}`}
          style={{
            transform: `translateY(${items[0]?.start ?? 0}px)`,
            paddingTop: `2px`,
          }}
        >
          {items.map((virtualRow) => {
            const isLoaderRow = virtualRow.index > dataLength - 1;
            const item = safeData[virtualRow.index];

            return (
              <div key={virtualRow.key} data-index={virtualRow.index} ref={rowVirtualizer.measureElement}>
                {isLoaderRow ? (
                  hasNextPage ? (
                    renderLoadingIndicator()
                  ) : (
                    renderEndOfListIndicator()
                  )
                ) : (
                  <div key={getItemKey(item, virtualRow.index)}>{renderItem(item, virtualRow.index)}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Use memo with generic type
const VirtualList = memo(VirtualListComponent) as typeof VirtualListComponent;
export default VirtualList;
