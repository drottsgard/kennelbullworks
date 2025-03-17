import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image';
import { Libre_Baskerville } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import opImage from '../../public/opengraph-image.png';
import MobileMenu from '@/components/MobileHeader';

//import PurinaProPlan from 'public/Purina_Pro_Plan.png';
//import SKKUppfodare from 'public/skk.png';
//import Cockerklubben from 'public/Cockerklubben.gif';

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
    'Kennel Bullworks, uppfödare av Engelsk Cocker Spaniel i Skåne. Välkommen att läsa mer om oss och våra hundar.'
};

function DesktopMenu() {
  return (
    <>
      <nav className="hidden lg:block uppercase">
        <ul className="flex gap-8">
          <li>
            <Link className="hover:text-slate-400" href="/">
              Hem
            </Link>
          </li>
          |
          <li>
            <Link className="hover:text-slate-400" href="/hundar">
              Våra hundar
            </Link>
          </li>
          |
          <li>
            <Link className="hover:text-slate-400" href="/om-oss">
              Om oss
            </Link>
          </li>
          |
          <li>
            <Link className="hover:text-slate-400" href="/kontakt">
              Kontakt
            </Link>
          </li>
          |
          <li>
            <Link className="hover:text-slate-400" href="/valpar">
              Valpar/Köpa hund
            </Link>
          </li>
          |
          <li>
            <Link className="hover:text-slate-400" href="/trimning">
              Pälsvård
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body
        className={`${libreBaskerville.className} flex flex-col text-primary min-h-[100vh]`}
      >
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
              src={'/SKK_Uppfodare.png'}
              height={128}
              width={128}
              alt="Svenska kennelklubben uppfödare"
            />
            <Image src={'/Cockerklubben.gif'} height={128}
              width={128}
              alt="Cockerklubben" />
            <Image
              src={'/Purina_Pro_Plan.png'}
              width={128}
              height={128}
              alt="Purina Pro Plan hundfoder"
            />
          </div>
        </footer>
      </body>
    </html>
  );
}
