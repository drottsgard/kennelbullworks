import { useLocale, useTranslations } from 'next-intl';

import { LOCALES } from '@/i18n/routing';
import LocaleSwitcherSelect from './LocaleSelect';

export function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      <option value={LOCALES.Swedish}>Svenska</option>
      <option value={LOCALES.English}>English</option>
    </LocaleSwitcherSelect>
  );
}
