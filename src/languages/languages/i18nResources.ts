/**
 * 文案包工厂：createI18nResources(resources, nameSpacesMap) 供用户自建 JSON 后生成 i18n 所需结构。
 * Bundle factory: createI18nResources(resources, nameSpacesMap) for building i18n structure from user JSON.
 */
import type { CreateI18nResourcesResult, LanguageEnum, NameSpacesMap, Resources } from "../types";

import i18n from "./i18n";
import { setLanguageStorage } from "../utils/languageStorage";

/**
 * 由调用方传入 resources 和 nameSpacesMap，生成 i18n 所需的 RESOURCES、NAME_SPACES_MAP、NAME_SPACES。
 * Caller provides resources and nameSpacesMap; returns RESOURCES, NAME_SPACES_MAP, NAME_SPACES for i18n.
 *
 * @param resources - 各语言下的命名空间文案。Bundles per language.
 * @param nameSpacesMap - 命名空间 key → 命名空间字符串。Namespace key to string.
 */
function createI18nResources(resources: Resources, nameSpacesMap: NameSpacesMap): CreateI18nResourcesResult {
  return {
    RESOURCES: resources,
    NAME_SPACES_MAP: nameSpacesMap,
    NAME_SPACES: Object.values(nameSpacesMap),
  };
}

/** 切换当前语言并写入 `language-storage`，刷新后保持一致。Persists choice for reloads. */
function changeLanguage(lng: LanguageEnum): void {
  setLanguageStorage(lng);
  void i18n.changeLanguage(lng);
}

export { createI18nResources, changeLanguage };
export type { CreateI18nResourcesResult, Resources, NameSpacesMap, NamespaceBundle } from "../types";
