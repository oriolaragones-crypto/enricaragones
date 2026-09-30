import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.enricaragones.com',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'en', 'fr'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
