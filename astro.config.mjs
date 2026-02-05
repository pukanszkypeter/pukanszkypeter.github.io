// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 8000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://pukanszkypeter.github.io",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hu", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
