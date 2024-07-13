import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"]
  }
});