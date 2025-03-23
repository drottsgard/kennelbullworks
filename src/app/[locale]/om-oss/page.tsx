import { useTranslations } from 'next-intl';
import Image from 'next/image';

import AlexanderBeaFlora from './alex_bea_flora_2.jpeg';
import { ReactNode } from 'react';

export default function About() {
  const t = useTranslations('About');
  return (
    <div
      className="
      p-4

      flex
      flex-col

      gap-4
      "
    >
      <PageHeading>{t('title')}</PageHeading>
      <AlexanderBeaFloraImage />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis
        urna rutrum, finibus dolor vel, facilisis nibh. Maecenas posuere urna
        vitae condimentum viverra. Donec egestas iaculis libero scelerisque
        vestibulum. In a ante blandit, tincidunt tortor vel, tristique nulla.
        Fusce placerat erat ornare aliquam rhoncus. In hac habitasse platea
        dictumst. Donec sit amet lectus nibh. Vestibulum sapien tortor, dictum
        at enim quis, vestibulum facilisis lacus. In mi dolor, lacinia lobortis
        tincidunt ut, rutrum quis erat. Praesent eros ligula, vehicula at
        rhoncus rhoncus, ultrices et augue. Nulla eu nisi id massa iaculis
        fermentum tempor ac nibh. Suspendisse sollicitudin vitae nibh a pretium.
        Sed feugiat finibus velit, quis lobortis est sodales vel. Proin molestie
        risus mi, sit amet venenatis lorem tincidunt eu. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Maecenas non leo vitae dui rhoncus
        bibendum. Suspendisse ac nulla vel elit iaculis finibus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Nam tempor scelerisque
        velit eget lobortis. Quisque eros arcu, auctor eget dui elementum,
        facilisis aliquam velit.
      </span>
      <PawLine />
      <PageHeadingSub>Alexander Drottsgård</PageHeadingSub>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis
        urna rutrum, finibus dolor vel, facilisis nibh. Maecenas posuere urna
        vitae condimentum viverra. Donec egestas iaculis libero scelerisque
        vestibulum. In a ante blandit, tincidunt tortor vel, tristique nulla.
        Fusce placerat erat ornare aliquam rhoncus. In hac habitasse platea
        dictumst. Donec sit amet lectus nibh. Vestibulum sapien tortor, dictum
        at enim quis, vestibulum facilisis lacus. In mi dolor, lacinia lobortis
        tincidunt ut, rutrum quis erat. Praesent eros ligula, vehicula at
        rhoncus rhoncus, ultrices et augue. Nulla eu nisi id massa iaculis
      </span>
      <PawLine />
      <PageHeadingSub>Filippa Drottsgård</PageHeadingSub>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis
        urna rutrum, finibus dolor vel, facilisis nibh. Maecenas posuere urna
        vitae condimentum viverra. Donec egestas iaculis libero scelerisque
        vestibulum. In a ante blandit, tincidunt tortor vel, tristique nulla.
        Fusce placerat erat ornare aliquam rhoncus. In hac habitasse platea
        dictumst. Donec sit amet lectus nibh. Vestibulum sapien tortor, dictum
        at enim quis, vestibulum facilisis lacus. In mi dolor, lacinia lobortis
        tincidunt ut, rutrum quis erat. Praesent eros ligula, vehicula at
      </span>
    </div>
  );
}

type PageHeadingProps = {
  children: ReactNode;
};

function PageHeading(props: PageHeadingProps) {
  return <h2 className="text-xl font-bold lg:text-4xl">{props.children}</h2>;
}

function PageHeadingSub(props: PageHeadingProps) {
  return <h3 className="text-l font-bold lg:text-2xl">{props.children}</h3>;
}

function PawLine() {
  return <div className=" bg-repeat-space h-[46px] w-full bg-paw-pattern" />;
}

function AlexanderBeaFloraImage() {
  return <Image src={AlexanderBeaFlora} alt="Alexander med Bea och Flora" />;
}
