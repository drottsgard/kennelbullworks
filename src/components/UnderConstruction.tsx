import React from 'react';

import { useTranslations } from 'next-intl';
export function UnderConstruction() {
  const t = useTranslations('Construction')
  return (
    <div className="flex pt-16">
      <h2 className="text-4xl">
        {t('constructionMessage')} 🚧🧑‍💻
      </h2>
    </div>
  );
}
