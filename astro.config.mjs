import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://www.wintechstudio.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Free tools were removed on 2 Nov 2026.
  redirects: {
    '/tools': '/book',
    '/tools/plan': '/book',
    '/tools/cost-calculator': '/pricing',
    '/tools/inbox-check': '/book',
  },
  integrations: [sitemap({ filter: (page) => !page.includes('/archive/') })],
});
