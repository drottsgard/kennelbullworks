import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image';
import { Libre_Baskerville } from 'next/font/google';
import './globals.css';
import { Link } from '@/i18n/navigation';
import opImage from '../../../public/opengraph-image.png';
import MobileMenu from '@/components/MobileHeader';

import { DesktopLocaleSwitcher } from '@/components/LocaleSwitcher';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Kennel Bullworks',

  openGraph: {
    url: 'https://kennelbullworks.se',
    type: 'website',
    title: 'Kennel Bullworks',
    description:
      'Kennel Bullworks, uppfödare av Engelsk Cocker Spaniel i Skåne. Välkommen att läsa mer om oss och våra hundar.',
    images: [
      {
        url: opImage.src,
        width: opImage.width,
        height: opImage.height,
      },
    ],
  },

  description:
    'Kennel Bullworks, uppfödare av Engelsk Cocker Spaniel i Skåne. Välkommen att läsa mer om oss och våra hundar.',
};

function DesktopMenu() {
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
          <DesktopLocaleSwitcher />
        </div>
      </nav>
    </>
  );
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={`${libreBaskerville.className} flex flex-col text-primary min-h-[100vh]`}
      >
        <NextIntlClientProvider>
          <header
            className="
          flex
          flex-col
          justify-between
          items-center
          p-4
          lg:py-4
          lg:px-20
          shadow-lg
          "
          >
            <div>
              <h1
                className="
              font-bold

              text-xl
              lg:text-6xl
              "
              >
                <Link href="/">
                  <span className="text-xs italic">KENNEL</span> <br />
                  <span className="">BULLWORKS</span>
                </Link>
              </h1>
              <div
                className="
                h-1

                bg-brown-400

                w-full
                "
              />
            </div>

            <div
              className="
            "
            >
              <div className="mt-6">
                <DesktopMenu />
                <MobileMenu />
              </div>
            </div>
          </header>
          <main className="mb-auto flex h-auto flex-col items-center justify-between">
            {children}
            <Analytics />
          </main>
          <footer
            className="
          bg-brown-400

          flex
          py-2
          justify-center

          "
          >
            <div
              className="
            flex
            items-center

            md:gap-4
            md:flex-row

            flex-col
            "
            >
              <Image
                src={'/skk.png'}
                height={128}
                width={128}
                alt="Svenska kennelklubben uppfödare"
              />
              <Image
                src={'/Cockerklubben.gif'}
                height={128}
                width={128}
                alt="Cockerklubben"
              />
              <Image
                src={'/Purina_Pro_Plan.png'}
                width={128}
                height={128}
                alt="Purina Pro Plan hundfoder"
              />
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
