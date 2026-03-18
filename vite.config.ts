/**
 * NFX-UI 库构建配置。仅子路径入口，不构建聚合 index，避免消费者 import 'nfx-ui' 时打进全量。
 * NFX-UI lib build: subpath entries only, no barrel index, so consumers don't pull the whole lib.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname);
const src = path.resolve(root, "src");

// ——— 子路径入口（与 package.json exports 一一对应） ———
// Subpath entries; must match package.json "exports" keys.
const LIB_ENTRIES: Record<string, string> = {
  themes: path.join(src, "themes/index.ts"),
  layouts: path.join(src, "designs/layouts/index.ts"),
  components: path.join(src, "designs/components/index.ts"),
  animations: path.join(src, "designs/animations/index.ts"),
  "pixel-blast": path.join(src, "designs/animations/PixelBlast/index.tsx"),
  hooks: path.join(src, "hooks/index.ts"),
  preference: path.join(src, "preference/index.ts"),
  stores: path.join(src, "stores/index.ts"),
  apis: path.join(src, "apis/index.ts"),
  events: path.join(src, "events/index.ts"),
  services: path.join(src, "services/index.ts"),
  navigations: path.join(src, "navigations/index.ts"),
  types: path.join(src, "types/index.ts"),
  utils: path.join(src, "utils/index.ts"),
  constants: path.join(src, "constants/index.ts"),
  languages: path.join(src, "languages/index.ts"),
  icons: path.join(src, "icons/index.ts"),
};

// ——— 外部依赖（不打包，由宿主/消费者提供） ———
// External deps; not bundled, provided by host or consumer.
const EXTERNALS = [
  "react",
  "react-dom",
  "react/jsx-runtime",
  /^react\//,
  /^react-dom\//,
  "lucide-react",
  /^lucide-react\//,
  "recharts",
  /^recharts\//,
  "three",
  /^three\//,
  "gsap",
  "@gsap/react",
  "motion",
  /^motion\//,
  "@tanstack/react-query",
  /^@tanstack\/react-query/,
  "react-router-dom",
  /^react-router-dom\//,
  "i18next",
  "react-i18next",
  "i18next-browser-languagedetector",
  "axios",
  "zustand",
  "react-hook-form",
  "@hookform/resolvers",
  "zod",
  "@headlessui/react",
  /^@headlessui\/react/,
  "@dnd-kit/core",
  "@dnd-kit/sortable",
  "@dnd-kit/utilities",
  "react-datepicker",
  "react-intersection-observer",
  "react-pro-sidebar",
  "lenis",
  "postprocessing",
  "eventemitter3",
  "uuid",
  "buffer",
  "axios-case-converter",
  "async-retry",
];

const globals = { react: "React", "react-dom": "ReactDOM" };

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      outDir: "dist",
      tsconfigPath: "./tsconfig.app.json",
      rollupTypes: true,
    }),
    cssInjectedByJsPlugin({
      // 多入口时：仅对每个入口自己的 .mjs/.cjs 注入该入口打包到的 CSS，chunk 不注入。
      // Multi-entry: inject CSS only into each entry's own output (themes→themes.mjs, layouts→layouts.mjs, …), not into chunks.
      jsAssetsFilterFunction: (chunk) => {
        const base = chunk.fileName.replace(/\.(mjs|cjs)$/, "");
        return Object.keys(LIB_ENTRIES).includes(base);
      },
    }),
  ],
  resolve: {
    alias: { "@": src },
  },
  css: {
    modules: {
      localsConvention: "camelCase" as const,
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    minify: "esbuild",
    lib: {
      entry: LIB_ENTRIES,
      name: "NfxUi",
      fileName: (format, entryName) =>
        `${entryName}${format === "es" ? ".mjs" : ".cjs"}`,
    },
    rollupOptions: {
      external: EXTERNALS,
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          chunkFileNames: "chunk-[name]-[hash].mjs",
          assetFileNames: "[name][extname]",
          globals,
        },
        {
          format: "cjs",
          entryFileNames: "[name].cjs",
          chunkFileNames: "chunk-[name]-[hash].cjs",
          assetFileNames: "[name][extname]",
          globals,
        },
      ],
    },
  },
});
