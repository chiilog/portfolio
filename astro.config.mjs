// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// Use the Vercel adapter for deployment to Vercel
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), icon()],
  output: 'server',
  adapter: vercel()
});
