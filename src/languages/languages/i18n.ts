/**
 * i18n 初始化与实例：initI18n 由 LanguageProvider 调用，changeLanguage 供外部切换语言。
 * 默认会合并 NFX-UI 自带的 theme / language / layout / preference 四个命名空间，使用方只需传入自己的 bundles。
 * i18n init and instance: initI18n called by LanguageProvider. Merges built-in theme/language/layout/preference by default.
 */
import type { InitI18nOptions } from "../types";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { getDefaultNfxBundles } from "../resources";
import { LanguageEnum, LANGUAGE_STORAGE_KEY, LANGUAGE_VALUES } from "../types";
import { getLanguageStorage, setLanguageStorage } from "../utils/languageStorage";

let languagePersistAttached = false;

/**
 * 初始化 i18n。会先合并 NFX-UI 自带的四类 JSON（theme/language/layout/preference），再与用户传入的 bundles 合并（用户可覆盖）。
 * Init i18n. Merges built-in NFX bundles (theme, language, layout, preference) with user bundles (user overrides).
 */
export function initI18n(options: InitI18nOptions): void {
  const nfx = getDefaultNfxBundles();
  const user = options.bundles;
  const fallbackLng = options.fallbackLng ?? LanguageEnum.ZH;

  const RESOURCES = ([LanguageEnum.EN, LanguageEnum.ZH, LanguageEnum.FR] as const).reduce(
    (acc, lang) => ({
      ...acc,
      [lang]: {
        ...(nfx.RESOURCES[lang] ?? {}),
        ...(user.RESOURCES[lang] ?? {}),
      },
    }),
    {} as typeof user.RESOURCES,
  );
  const NAME_SPACES = [...user.NAME_SPACES, ...nfx.NAME_SPACES.filter((n) => !user.NAME_SPACES.includes(n))];

  /** Same key as `lookupLocalStorage`: prefer saved choice before navigator. */
  const initialLng = getLanguageStorage() ?? fallbackLng;

  const persistLanguage = (lng: string) => {
    const base = lng.split("-")[0]?.toLowerCase() ?? "";
    if ((LANGUAGE_VALUES as readonly string[]).includes(base)) {
      setLanguageStorage(base as LanguageEnum);
    }
  };

  if (!languagePersistAttached) {
    i18n.on("languageChanged", persistLanguage);
    languagePersistAttached = true;
  }

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      compatibilityJSON: "v4",
      resources: RESOURCES,
      lng: initialLng,
      fallbackLng,
      ns: NAME_SPACES,
      defaultNS: NAME_SPACES[0],
      interpolation: { escapeValue: false },
      keySeparator: ".",
      /**
       * Detector walks `order` and concatenates hits; first candidate wins for resolution.
       * `lookupLocalStorage` must match `getLanguageStorage` / `setLanguageStorage` (LANGUAGE_STORAGE_KEY).
       * Explicit `lng: initialLng` above mirrors that rule so behavior is obvious without reading plugin internals.
       */
      detection: {
        order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
        lookupLocalStorage: LANGUAGE_STORAGE_KEY,
        caches: ["localStorage"],
      },
    });

  const onLoad = options.onLoadExtraBundles;
  if (onLoad) {
    const apply = async (lng: LanguageEnum) => {
      const result = await onLoad(lng);
      if (result == null) return;
      const items = Array.isArray(result) ? result : [result];
      for (const { namespace, bundle } of items) {
        if (namespace && bundle && typeof bundle === "object") {
          i18n.addResourceBundle(lng, namespace, bundle, true, true);
        }
      }
    };
    void apply((i18n.language as LanguageEnum) || fallbackLng);
    i18n.on("languageChanged", (lng) => void apply(lng as LanguageEnum));
  }
}

export default i18n;
