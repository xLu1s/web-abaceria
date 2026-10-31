// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: https://xlu1s.github.io/web-abaceria/
export default defineConfig({
  site: 'https://xlu1s.github.io',
  base: '/web-abaceria',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
