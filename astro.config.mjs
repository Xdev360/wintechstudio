import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://www.wintechstudio.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (page) => !page.includes('/archive/') })],
});
