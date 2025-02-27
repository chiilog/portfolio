import eslintPluginAstro from "eslint-plugin-astro";
import typescriptParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    ignores: [
      "node_modules",
      ".github",
      "dist",
      "public",
      "package-lock.json",
      "yarn.lock",
      "vite.config.ts",
      "next.config.js",
      "tsconfig.json",
      "src/env.d.ts",
      "*.cjs",
      "*.mjs",
    ],
  },
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx,jsx}"],
    languageOptions: {
      parser: typescriptParser,
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
];
