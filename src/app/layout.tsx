import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kennel Bullworks',
};

function DesktopHeader() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-8">
        <li>
          <Link href="/">Hem</Link>
        </li>
        <li>
          <Link href="/om-oss">Om oss</Link>
        </li>
        <li>
          <Link href="/vara-hundar">Våra hundar</Link>
        </li>
        <li>
          <Link href="/valpar">Valpar</Link>
        </li>
        <li>
          <Link href="/cocker-spaniel">Om Cocker Spaniel</Link>
        </li>
      </ul>
    </nav>
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
        className={`${inter.className} flex flex-col text-primary min-h-[100vh]`}
      >
        <header
          className="
          flex justify-between items-center
          p-4
          lg:py-8 lg:px-20"
        >
          <h1 className="text-xl font-bold lg:text-4xl">
            <Link href="/">Kennel Bullworks</Link>
          </h1>

          <ul className="flex gap-4 md:flex-row">
            <li className="md:mr-auto">
              <a
                target="_blank"
                href="https://www.instagram.com/bullworkscockers"
                className="flex gap-2"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li className="md:mr-auto">
              <a
                target="_blank"
                href="https://www.facebook.com/kennelbullworks"
                className="flex gap-2"
              >
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  height={24}
                  width={24}
                />
              </a>
            </li>
          </ul>
        </header>
        <main className="flex h-auto flex-col items-center justify-between">
          {children}
        </main>
        <footer className="flex flex-col gap-3 h-[124px] bg-brown-400 pt-8 md:gap-6 md:pt-16 md:pb-8 md:px-28 md:h-[188px]">
          <h4 className="text-center">Skurup, Skåne</h4>
          <div className="min-h-[1px] w-full bg-primary" />
          <p className="text-center text-xs font-thin">
            Designed with ♥ by Madeleine
          </p>
        </footer>
      </body>
    </html>
  );
}
