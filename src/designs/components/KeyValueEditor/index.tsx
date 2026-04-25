/**
 * 键值对编辑器：动态增删 key-value 行，支持 string 或 array 值类型。Key-value pair editor; add/remove rows, valueType string or array.
 *
 * @example
 * ```tsx
 * * 字符串值
 * const [pairs, setPairs] = useState<KeyValuePair[]>([{ key: "env", value: "prod" }]);
 * <KeyValueEditor label="环境变量" pairs={pairs} onChange={setPairs} />
 * * 数组值（逗号分隔）
 * <KeyValueEditor label="标签" pairs={pairs} onChange={setPairs} valueType="array" />
 * ```
 */
import type { ReactNode } from "react";

import { memo, useEffect, useState } from "react";

import Button from "@/designs/components/Button";
import Input from "@/designs/components/Input";
import { Plus, Trash2 } from "@/icons/lucide";

import styles from "./styles.module.css";

export interface KeyValuePair {
  /** 键。Key. */
  key: string;
  /** 值（字符串或字符串数组）。Value (string or string[]). */
  value: string | string[];
}

export interface KeyValueEditorProps {
  /** 表单项标签。Field label. */
  label: ReactNode;
  /** 键值对列表。Key-value pairs. */
  pairs: KeyValuePair[];
  /** 列表变化回调。Change callback. */
  onChange: (pairs: KeyValuePair[]) => void;
  /** 值类型：string 或 array。Value type: string or array. */
  valueType?: "string" | "array";
  /** 键占位符。Key placeholder. */
  keyPlaceholder?: string;
  /** 值占位符（string 模式）。Value placeholder (string mode). */
  valuePlaceholder?: string;
  /** 值占位符（array 模式）。Value placeholder (array mode). */
  valueArrayPlaceholder?: string;
  /** 删除按钮 aria-label。Remove button aria-label. */
  removeAriaLabel?: string;
  /** 新增按钮文案。Add button label. */
  addLabel?: ReactNode;
  /** 错误信息。Error message. */
  error?: ReactNode;
}

const KeyValueEditor = memo(
  ({
    label,
    pairs,
    onChange,
    valueType = "string",
    keyPlaceholder = "Key",
    valuePlaceholder = "Value",
    valueArrayPlaceholder = "Value (comma-separated)",
    removeAriaLabel = "Remove row",
    addLabel = "Add",
    error,
  }: KeyValueEditorProps) => {
    const effectiveValuePlaceholder = valueType === "array" ? valueArrayPlaceholder : valuePlaceholder;
    const [localPairs, setLocalPairs] = useState<KeyValuePair[]>(pairs);

    // Sync with external pairs changes
    useEffect(() => {
      setLocalPairs(pairs);
    }, [pairs]);

    const handleAdd = () => {
      const newPairs = [...localPairs, { key: "", value: valueType === "array" ? [] : "" }];
      setLocalPairs(newPairs);
      onChange(newPairs);
    };

    const handleRemove = (index: number) => {
      const newPairs = localPairs.filter((_, i) => i !== index);
      setLocalPairs(newPairs);
      onChange(newPairs);
    };

    const handleKeyChange = (index: number, key: string) => {
      const newPairs = [...localPairs];
      newPairs[index] = { ...newPairs[index], key };
      setLocalPairs(newPairs);
      onChange(newPairs);
    };

    const handleValueChange = (index: number, value: string) => {
      const newPairs = [...localPairs];
      if (valueType === "array") {
        // Split by comma and trim
        const arrayValue = value
          .split(",")
          .map((v) => v.trim())
          .filter((v) => v.length > 0);
        newPairs[index] = { ...newPairs[index], value: arrayValue };
      } else {
        newPairs[index] = { ...newPairs[index], value };
      }
      setLocalPairs(newPairs);
      onChange(newPairs);
    };

    const getDisplayValue = (value: string | string[]): string => {
      if (Array.isArray(value)) {
        return value.join(", ");
      }
      return value;
    };

    return (
      <div className={styles.container}>
        <label className={styles.label}>{label}</label>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.pairs}>
          {localPairs.map((pair, index) => (
            <div key={index} className={styles.pair}>
              <Input placeholder={keyPlaceholder} value={pair.key} onChange={(e) => handleKeyChange(index, e.target.value)} className={styles.keyInput} />
              <Input
                placeholder={effectiveValuePlaceholder}
                value={getDisplayValue(pair.value)}
                onChange={(e) => handleValueChange(index, e.target.value)}
                className={styles.valueInput}
              />
              <Button type="button" variant="ghost" onClick={() => handleRemove(index)} className={styles.removeButton} aria-label={removeAriaLabel}>
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
        </div>
        <Button type="button" variant="secondary" onClick={handleAdd} className={styles.addButton}>
          <Plus size={16} />
          {addLabel}
        </Button>
      </div>
    );
  },
);

KeyValueEditor.displayName = "KeyValueEditor";

export default KeyValueEditor;
