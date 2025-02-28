import eslintPluginAstro from "eslint-plugin-astro";
import typescriptParser from "@typescript-eslint/parser";
import astroParser from "astro-eslint-parser";
import eslintConfigPrettier from "eslint-config-prettier";

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
    files: ["src/**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: typescriptParser,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      "prettier/prettier": "off",
    },
  },
  {
    files: ["src/**/*.{ts,tsx,jsx}"],
    languageOptions: {
      parser: typescriptParser,
    },
  },
  eslintConfigPrettier,
];
