import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from './LocaleSwitcher';

export default function DesktopMenu() {
  const t = useTranslations('Links');
  return (
    <>
      <nav className="hidden lg:block uppercase">
        <ul className="flex gap-8 items-center">
          <li>
            <Link className="hover:text-slate-400" href="/">
              {t('home')}
            </Link>
          </li>
          |
          <li>
            <Link className="hover:text-slate-400" href="/hundar">
              {t('ourDogs')}
            </Link>
          </li>
          |
          <li>
            <Link className="hover:text-slate-400" href="/om-oss">
              {t('about')}
            </Link>
          </li>
          |
          <li>
            <Link className="hover:text-slate-400" href="/kontakt">
              {t('contact')}
            </Link>
          </li>
          |
          <li>
            <Link className="hover:text-slate-400" href="/valpar">
              {t('puppies')}
            </Link>
          </li>
          |
          <li>
            <Link className="hover:text-slate-400" href="/trimning">
              {t('grooming')}
            </Link>
          </li>
        </ul>

        <div className="absolute right-36 top-20">
          <LocaleSwitcher />
        </div>
      </nav>
    </>
  );
}
