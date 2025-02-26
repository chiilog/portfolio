import eslintPluginAstro from "eslint-plugin-astro";
export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["src/**/*.{astro,ts,tsx,jsx}"],
  },
];
