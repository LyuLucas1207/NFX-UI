/**
 * 显示/隐藏筛选器：开关 + 全部/显示/隐藏选项；文案由调用方传入。Show/hide filter; labels passed as props.
 *
 * @example
 * ```tsx
 * * 受控，不传文案则用默认英文；可传 i18n
 * <ShowFilter value={filter} onChange={setFilter} />
 * <ShowFilter value={filter} onChange={setFilter} all={t("showFilter.all")} show={t("showFilter.show")} hide={t("showFilter.hide")} />
 * ```
 */
import type { ReactNode } from "react";

import { memo } from "react";

import { Eye, EyeOff, Filter } from "@/icons/lucide";

import styles from "./styles.module.css";

export interface ShowFilterValue {
  /** 筛选是否启用。Whether filter is enabled. */
  enabled: boolean;
  /** 显示/隐藏：null=全部，true=显示，false=隐藏。Show/hide: null=all, true=show, false=hide. */
  value: boolean | null;
}

export interface ShowFilterProps {
  /** 当前值。Current value. */
  value: ShowFilterValue;
  /** 值变化回调。Change callback. */
  onChange: (value: ShowFilterValue) => void;
  /** 筛选开启时的按钮文案。Label when filter enabled. */
  filterEnabled?: ReactNode;
  /** 筛选关闭时的按钮文案。Label when filter disabled. */
  filterDisabled?: ReactNode;
  /** 开启筛选按钮的 aria-label。Aria-label for enable filter button. */
  enableFilterAriaLabel?: string;
  /** 关闭筛选按钮的 aria-label。Aria-label for disable filter button. */
  disableFilterAriaLabel?: string;
  /** 「全部」选项文案。Label for "all" option. */
  all?: ReactNode;
  /** 「显示」选项文案。Label for "show" option. */
  show?: ReactNode;
  /** 「隐藏」选项文案。Label for "hide" option. */
  hide?: ReactNode;
}

const ShowFilter = memo(
  ({
    value,
    onChange,
    filterEnabled = "Filter on",
    filterDisabled = "Filter",
    enableFilterAriaLabel = "Enable filter",
    disableFilterAriaLabel = "Disable filter",
    all = "All",
    show = "Show",
    hide = "Hide",
  }: ShowFilterProps) => {
    const handleToggleEnabled = () => {
      onChange({ ...value, enabled: !value.enabled });
    };

    const handleSelectValue = (filterValue: boolean | null) => {
      onChange({ ...value, value: filterValue });
    };

    return (
      <div className={styles.container}>
        <div className={styles.toggleContainer}>
          <button
            type="button"
            className={`${styles.toggleButton} ${value.enabled ? styles.enabled : ""}`}
            onClick={handleToggleEnabled}
            aria-label={value.enabled ? disableFilterAriaLabel : enableFilterAriaLabel}
          >
            <Filter size={16} />
            <span>{value.enabled ? filterEnabled : filterDisabled}</span>
          </button>
        </div>

        {value.enabled && (
          <div className={styles.optionsContainer}>
            <button type="button" className={`${styles.option} ${value.value === null ? styles.active : ""}`} onClick={() => handleSelectValue(null)}>
              {all}
            </button>
            <button type="button" className={`${styles.option} ${value.value === true ? styles.active : ""}`} onClick={() => handleSelectValue(true)}>
              <Eye size={16} />
              <span>{show}</span>
            </button>
            <button type="button" className={`${styles.option} ${value.value === false ? styles.active : ""}`} onClick={() => handleSelectValue(false)}>
              <EyeOff size={16} />
              <span>{hide}</span>
            </button>
          </div>
        )}
      </div>
    );
  },
);

ShowFilter.displayName = "ShowFilter";

export default ShowFilter;
