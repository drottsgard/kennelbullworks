'use client';
import Image from 'next/image';

import { useTranslations } from 'next-intl';

import Hero from '@/components/Hero';
import Heading3 from '@/components/Typography/Heading';
import Parapgraph from '@/components/Typography/Paragraph';
export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="flex flex-col gap-8 w-full">
      <Hero />
      <div className="px-8 flex flex-col gap-4 md:px-28 md:items-center">
        <Heading3 className="">{t('welcome')}</Heading3>
        <Parapgraph className="md:max-w-[800px]">
          {t('welcomeMessage')}
        </Parapgraph>

        <div
          className="
          h-1

          md:w-1/2
          bg-brown-400

          w-full
          "
        />

        <Heading3 className="text-1xl">{t('news')}</Heading3>
        <Parapgraph className="md:max-w-[800px]">{t('socialMedia')}</Parapgraph>
        <ul
          className="
          md:flex
          md:gap-4
          md:flex-row
          md:font-bold
          md:mb-8

          mb-5
          "
        >
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
              bullworkscockers
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
              Kennel Bullworks
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
