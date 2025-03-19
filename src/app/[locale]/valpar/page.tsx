import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Parapgraph from '@/components/Typography/Paragraph';

export default function Valpar() {
  const t = useTranslations('Puppies')
  const puppyInfo = t.raw('puppyInfo');
  return (
    <div
      className="
      p-4
      md:py-8
      flex
      flex-col
      lg:px-32
      gap-4
      lg:w-4/6
      md:gap-8"

    >
      <h2 className="text-xl font-bold lg:text-4xl">
        {t('title')}
      </h2>
      <div
        className="
        flex

        flex-col
        items-center
        xl:flex-row

        xl:gap-20
        "
      >
        <div className=" lg:min-w-[450px] w-full flex flex-col gap-1 md:w-3/3">
          <Parapgraph>
          </Parapgraph>
          <Parapgraph>
            {t('text1')}
            <br />
            <br />
            {t('text2')}
          </Parapgraph>
          <ul
            className="
            my-4
            pl-5
            list-disc
            italic
            "
          >
            {puppyInfo.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

        <div
          className="
          relative
          rounded-[inherit]
          overflow-hidden
          w-full
          aspect-square
lg:min-w-[450px]
          lg:max-w-[644px]

          "
        >
          <Image
            src={'/bianca_valpar_snabba.jpeg'}
            alt="Cocker spaniel valpar"
            fill
            className=" object-fill md:object-cover"

          />
        </div>
      </div>
    </div>
  );
}
