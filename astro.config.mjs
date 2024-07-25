import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import { defaultLocale, localesArray } from "./src/data/locales";
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cv.marianoguillaume.com',
  integrations: [tailwind(), react(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
    i18n: {
      defaultLocale,
      locales: localesArray
    },
  }),],
  i18n: {
    defaultLocale,
    locales: localesArray
  }
});