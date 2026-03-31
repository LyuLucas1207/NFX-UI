# NFX-UI — Unified Frontend UI Library

**NFX-UI** is the shared frontend UI library of the NebulaForgeX ecosystem. It provides React components, design tokens, theme system, layout primitives, i18n, and utilities for a consistent look and behavior across NFX Console and other applications. Built with **React 18/19**, **TypeScript**, and **Vite** (library mode), NFX-UI is distributed as ESM/CJS with inlined styles and full type definitions—no separate CSS import required.

<div align="center">
  <img src="https://github.com/NebulaForgeX/NFX-UI/raw/main/docs/image1.png" alt="NFX-UI Logo" width="200">
</div>

---

## How to use in your app

### 1. Install

- **Option A:** After publishing to npm, run `npm install nfx-ui` in your app.
- **Option B:** When unpublished, run `npm run build` and `npm link` in NFX-UI, then `npm link nfx-ui` in your app.
- If your environment requires a script (e.g. `source /volume1/use-menv.sh`) before npm, run it first.

```bash
# Option A (in your app)
npm install nfx-ui

# Option B
# Step 1: in NFX-UI repo
cd /path/to/NFX-UI
npm run link

# Step 2: in your app
cd /path/to/your-app
npm link nfx-ui
```

### 2. Peer dependencies

Your project must have `react` and `react-dom` (^18.0.0 or ^19.0.0). For themes, charts, etc., you may need `lucide-react`, `recharts`, `@tanstack/react-query`, `zustand` (see NFX-UI `package.json` peerDependencies).

### 3. Usage

Use **subpath imports**; no separate CSS import. Components have typed props; use `import type { ... } from "nfx-ui/..."` for types; styles are inlined.

```tsx
import { ThemeProvider } from "nfx-ui/themes";
import { LanguageProvider } from "nfx-ui/languages";
import { LayoutProvider } from "nfx-ui/layouts";
import { Button, Input } from "nfx-ui/components";
import type { LanguageEnum } from "nfx-ui/languages";
import type { ApiErrorBody } from "nfx-ui/types";

export function App() {
  return (
    <ThemeProvider defaultTheme="default">
      <LanguageProvider>
        <LayoutProvider>
          <Button>Confirm</Button>
          <Input placeholder="Enter" />
        </LayoutProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
```

### 4. Full steps in another project

1. **Environment:** If required, run `source /volume1/use-menv.sh` (or your local equivalent) before any npm commands.
2. **Install or link:** Published: `npm install nfx-ui`. Unpublished: run `npm run link` in NFX-UI, then `npm link nfx-ui` in this project.
3. **Peer deps:** Ensure `react` and `react-dom` (v18 or v19) are in your project.
4. **Optional runtime deps:** When using themes, icons, charts, etc., install `lucide-react`, `@tanstack/react-query`, `recharts`, `zustand` in your app (versions compatible with NFX-UI’s `package.json`).
5. **Wrap with Providers:** Wrap your root with `ThemeProvider`, `LanguageProvider`, `LayoutProvider`, etc. (see code above).
6. **Import by subpath:** `import { Button } from "nfx-ui/components"`, `import { useTheme } from "nfx-ui/themes"`, etc.; use `import type { ... } from "nfx-ui/types"` for types.
7. **Build & run:** Use your usual scripts (`npm run dev` / `npm run build`); the bundler will resolve nfx-ui and tree-shake unused exports.

---

## What’s included

Main modules and contents below; full component and API docs: [docs/](./docs/).

| Module        | Contents |
|---------------|----------|
| **themes**    | ThemeProvider, useTheme, theme vars |
| **languages** | LanguageProvider, i18n, useLanguageLabel, useThemeLabel |
| **layouts**   | LayoutProvider, Sidebar, Header, Footer, Background |
| **components**| Button, Input, Dropdown, Slider, VirtualList, SlideDownSwitcher, etc. |
| **animations**| WaveBackground, ECGLoading, TruckLoading, BounceLoading, etc. |
| **hooks**     | makeUnifiedQuery, makeUnifiedInfiniteQuery |
| **preference**| User preference (e.g. profile.preference) |
| **types**     | Shared TypeScript types |
| **utils**     | getApiErrorMessage, formatDisplayDate, retry, etc. |
| **constants** | Query key factories, defineEnum |

---

## Development (this repo)

### Setup

This repo is library-only: no dev server or demo; test via `npm link` in a real app. Run `npm install` after clone.

```bash
npm install
```

### Build

Run `npm run build`. Output in `dist/`: ESM (`.mjs`), CJS (`.cjs`), and `.d.ts`; styles inlined.

```bash
npm run build
```

### Build messages and warnings

You may see these during build; both are safe to ignore:
1. **TypeScript version:** vite-plugin-dts uses an older TS in API Extractor; the “consider upgrading API Extractor” message does not affect type output.
2. **PLUGIN_TIMINGS:** Plugin timing breakdown; informational only.

### Test locally (npm link)

1. In NFX-UI: `npm run link`.
2. In your app: `npm link nfx-ui`.
3. After changing NFX-UI, run `npm run build` in NFX-UI again.

### Lint & format

`npm run lint` for ESLint; `npm run lint:code-format` for Prettier check; `npm run format` for Prettier write.

```bash
npm run lint
npm run lint:code-format
npm run format
```

---

## Project structure

`src/` contains entry and modules; path alias `@/` (points to `src/`) is used in this repo.

```
src/
├── designs/       # layouts, components, animations
├── languages/      # i18n, LanguageProvider, useLanguageLabel, etc.
├── themes/         # ThemeProvider, useTheme, theme data
├── hooks/          # makeUnifiedQuery, makeUnifiedInfiniteQuery
├── preference/     # User preference
├── types/          # Shared types
├── utils/          # Helpers
├── constants/      # Query keys, enums
├── stores/         # Zustand stores
├── events/         # EventEmitter
├── apis/           # API path helpers
└── ...
```

---

## License

[MIT](LICENSE) — see [LICENSE](LICENSE) for details.

---

---

# NFX-UI — 统一前端 UI 库

**NFX-UI** 是 NebulaForgeX 生态的统一前端 UI 库，提供 React 组件、设计令牌、主题系统、布局基元、多语言与工具函数，为 NFX 控制台及其他应用提供一致的外观与交互。基于 **React 18/19**、**TypeScript** 与 **Vite**（库模式）构建，以 ESM/CJS 发布，样式内联、类型完整，使用方无需单独引入 CSS。

---

## 外部项目如何使用

### 1. 安装

- **方式 A**：发布到 npm 后，在业务项目中执行 `npm install nfx-ui`。
- **方式 B**：未发布时，在 NFX-UI 目录执行 `npm run build` 与 `npm link`，在业务项目目录执行 `npm link nfx-ui`。
- 若本机约定先加载环境（如 `source /volume1/use-menv.sh`），请在执行任何 npm 命令前先执行。

```bash
# 方式 A（在业务项目）
npm install nfx-ui

# 方式 B
# 步骤 1：在 NFX-UI 仓库
cd /path/to/NFX-UI
npm run link

# 步骤 2：在要使用 NFX-UI 的项目
cd /path/to/your-app
npm link nfx-ui
```

### 2. 依赖要求

你的项目需已安装 `react`、`react-dom`（^18.0.0 或 ^19.0.0）。若使用主题、图表等，可能还需按需安装 `lucide-react`、`recharts`、`@tanstack/react-query`、`zustand` 等（见 NFX-UI 的 `package.json` peerDependencies）。

### 3. 在代码里使用

使用**子路径导入**，无需单独引入 CSS。组件直接使用即有 props 类型提示；类型通过 `import type { ... } from "nfx-ui/..."` 获取；样式已内联。

```tsx
import { ThemeProvider } from "nfx-ui/themes";
import { LanguageProvider } from "nfx-ui/languages";
import { LayoutProvider } from "nfx-ui/layouts";
import { Button, Input } from "nfx-ui/components";
import type { LanguageEnum } from "nfx-ui/languages";
import type { ApiErrorBody } from "nfx-ui/types";

export function App() {
  return (
    <ThemeProvider defaultTheme="default">
      <LanguageProvider>
        <LayoutProvider>
          <Button>确定</Button>
          <Input placeholder="请输入" />
        </LayoutProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
```

### 4. 其他项目中的完整步骤示例

在「别的项目」里从零用上 NFX-UI 的推荐顺序：

1. **确保环境**：若团队要求，先执行 `source /volume1/use-menv.sh`（或你本机的等价命令）。
2. **安装或链接**：已发布：`npm install nfx-ui`。未发布：在 NFX-UI 里执行 `npm run link`，再在本项目执行 `npm link nfx-ui`。
3. **确认 peer**：项目里已有 `react`、`react-dom`（版本 18 或 19）。
4. **按需装运行时依赖**：用到主题/图标/图表等时，在业务项目安装 `lucide-react`、`@tanstack/react-query`、`recharts`、`zustand` 等（与 NFX-UI 的 `package.json` 一致或兼容）。
5. **在入口外包一层 Provider**：在根组件外包上 `ThemeProvider`、`LanguageProvider`、`LayoutProvider` 等（见上面代码）。
6. **按子路径引入**：`import { Button } from "nfx-ui/components"`，`import { useTheme } from "nfx-ui/themes"` 等；类型用 `import type { ... } from "nfx-ui/types"`。
7. **构建与运行**：按你项目原有方式（如 `npm run dev` / `npm run build`）即可，打包器会从 nfx-ui 解析并做 tree-shaking。

---

## 包含模块

下表为包内主要模块与内容；完整组件与 API 见 [docs/](./docs/)。

| 模块         | 内容 |
|--------------|------|
| **themes**   | ThemeProvider、useTheme、主题变量 |
| **languages**| LanguageProvider、i18n、useLanguageLabel、useThemeLabel |
| **layouts**  | LayoutProvider、Sidebar、Header、Footer、Background |
| **components** | Button、Input、Dropdown、Slider、VirtualList、SlideDownSwitcher 等 |
| **animations** | WaveBackground、ECGLoading、TruckLoading、BounceLoading 等 |
| **hooks**    | makeUnifiedQuery、makeUnifiedInfiniteQuery |
| **preference** | 用户偏好（如 profile.preference） |
| **types**    | 共享 TypeScript 类型 |
| **utils**    | getApiErrorMessage、formatDisplayDate、retry 等 |
| **constants**| Query key 工厂、defineEnum 等 |

---

## 本仓库开发

### 安装依赖

本仓库为纯库，无 dev 服务器或 demo，需在真实应用中通过 `npm link` 测试。克隆后执行 `npm install` 安装依赖。

```bash
npm install
```

### 构建

执行 `npm run build`，产物在 `dist/`：ESM（.mjs）、CJS（.cjs）、类型（.d.ts），样式已内联。

```bash
npm run build
```

### 构建时的提示与警告

构建过程中可能出现以下提示，均可忽略，不影响产物：
1. **TypeScript 版本提示**：vite-plugin-dts 内置的 API Extractor 使用较旧 TS 版本，项目使用 5.9.x 时会提示 “consider upgrading API Extractor”，类型仍会正确生成。
2. **PLUGIN_TIMINGS**：Vite 输出的插件耗时统计，仅作参考，无需处理。

### 本地联调（npm link）

1. 在 NFX-UI 目录执行 `npm run link`。
2. 在消费项目中执行 `npm link nfx-ui`。
3. 修改 NFX-UI 后需在 NFX-UI 目录再次执行 `npm run build` 才能生效。

### 代码检查与格式化

`npm run lint` 运行 ESLint；`npm run lint:code-format` 检查 Prettier；`npm run format` 执行 Prettier 格式化。

```bash
npm run lint
npm run lint:code-format
npm run format
```

---

## 项目结构

`src/` 下为入口与各模块；本仓库内使用路径别名 `@/`（指向 `src/`）。

```
src/
├── designs/       # layouts、components、animations
├── languages/     # i18n、LanguageProvider、useLanguageLabel 等
├── themes/        # ThemeProvider、useTheme、主题数据
├── hooks/         # makeUnifiedQuery、makeUnifiedInfiniteQuery
├── preference/    # 用户偏好
├── types/         # 共享类型
├── utils/         # 工具函数
├── constants/     # Query keys、枚举等
├── stores/        # Zustand stores
├── events/        # EventEmitter
├── apis/          # API path 等
└── ...
```

---

## 许可证

[MIT](LICENSE) — 详见 [LICENSE](LICENSE)。
