import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';

import AlexanderBeaFlora from './alex_bea_flora_2.jpeg';
import FilippaBibbi from './filippa_bibbi.jpg';
import BaliBullworks from './bali_bullworks.jpeg';
import Parapgraph from '@/components/Typography/Paragraph';

export default function About() {
  const t = useTranslations('About');
  return (
    <div
      className="
      p-4

      flex
      flex-col

      gap-4

      container
      "
    >
      <PageHeading>{t('title')}</PageHeading>
      <div
        className="
        sm:flex-row
        gap-4
        lg:gap-52
        flex
        flex-col-reverse
        "
      >
        <div className="flex flex-col gap-4 sm:w-1/2 sm:self-center">
          <Parapgraph>{t('text1')}</Parapgraph>

          <Parapgraph>{t('text2')}</Parapgraph>

          <Parapgraph>{t('text3')}</Parapgraph>
        </div>
        <div className="sm:w-1/4">
          <BaliBullworksImage />
        </div>
      </div>
      <div
        className="
        flex
        flex-col-reverse
        gap-8

        sm:flex-row
        sm:gap-12
        "
      >
        <ImageSize>
          <MyImage src={AlexanderBeaFlora} alt="Alexander med Bea och Flora" />
        </ImageSize>
        <ImageSize>
          <MyImage src={FilippaBibbi} alt="Filippa med Bibbi" />
        </ImageSize>
      </div>
    </div>
  );
}

type PageHeadingProps = {
  children: ReactNode;
};

function PageHeading(props: PageHeadingProps) {
  return <h2 className="text-xl font-bold lg:text-4xl">{props.children}</h2>;
}

function BaliBullworksImage() {
  return <Image src={BaliBullworks} alt="Bali med Bullworks kennel-skylt" />;
}

function ImageSize({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
          relative
          overflow-hidden

          w-full

          md:w-72
          md:h-80

          lg:w-80
          lg:h-96
          "
    >
      {children}
    </div>
  );
}

type MyImageProps = {
  src: StaticImageData;
  alt: string;
};

function MyImage(props: MyImageProps) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      className="sm:object-cover object-contain"
    />
  );
}
