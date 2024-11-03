export const i18n = {
  defaultLocale: 'pt',
  locales: ['pt', 'fr'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
