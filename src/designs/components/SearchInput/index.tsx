/**
 * 搜索输入框：带搜索图标与清除按钮；文案由调用方传入。Search input with search icon and clear button; labels passed as props.
 *
 * @example
 * ```tsx
 * * 受控，文案由上层 i18n 传入
 * const { t } = useTranslation("components");
 * <SearchInput value={keyword} onChange={setKeyword} placeholder={t("searchInput.placeholder")} clearButtonAriaLabel={t("searchInput.clearSearch")} />
 * ```
 */
import { memo } from "react";

import { Search, X } from "@/icons/lucide";

import styles from "./styles.module.css";

export interface SearchInputProps {
  /** 当前输入值。Current value. */
  value: string;
  /** 值变化回调。Change callback. */
  onChange: (value: string) => void;
  /** 占位符，由调用方传入。Placeholder; pass from caller. */
  placeholder?: string;
  /** 清除按钮 aria-label；由调用方传入（可来自 i18n）。Clear button aria-label; pass from caller. */
  clearButtonAriaLabel?: string;
  /** 为 true 时占满父级宽度并去掉 400px 上限（如模态内）；列表顶栏保持默认。 */
  fullWidth?: boolean;
}

const SearchInput = memo(
  ({ value, onChange, placeholder, clearButtonAriaLabel = "Clear search", fullWidth = false }: SearchInputProps) => {
  const handleClear = () => onChange("");

  return (
    <div className={`${styles.searchContainer} ${fullWidth ? styles.searchContainerFull : ""}`.trim()}>
      <Search size={18} className={styles.searchIcon} />
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={styles.searchInput} />
      {value && (
        <button onClick={handleClear} className={styles.clearBtn} aria-label={clearButtonAriaLabel}>
          <X size={16} />
        </button>
      )}
    </div>
  );
  },
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
