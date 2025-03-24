import { defineRouting } from 'next-intl/routing';

export const LOCALES = {
  Swedish: 'sv',
  English: 'en',
} as const;

export const routing = defineRouting({
  locales: [LOCALES.Swedish, LOCALES.English],

  defaultLocale: LOCALES.Swedish,
});
