// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "src/**/*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
