import js from "@eslint/js";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: [
      "postcss.config.js",
      "tailwind.config.js",
      "tailwind.config.ts",
      "vite.config.ts",
      "tsconfig.json",
      "components.json",
      ".prettierrc.cjs",
      "dist/*",
      "build/*",
      "node_modules/*",
      "public/*",
      ".react-router/**/*",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
  {
    plugins: {
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      ...pluginJsxA11y.configs.recommended.rules,
    },
  },
  {
    settings: {
      react: {
        version: "19.1.1",
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": ["warn"],
      "jsx-a11y/heading-has-content": ["off"],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
]);
