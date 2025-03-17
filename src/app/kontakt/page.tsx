import Image, { StaticImageData } from 'next/image';

import Alexander from '/alex_bea_flora.jpeg';
import Filippa from 'public/filippa_bibbi_bianca_1.jpeg';

import Parapgraph from '@/components/Typography/Paragraph';

export default function page() {
  return (
    <div
      className="
      p-4
      md:py-8
      flex
      flex-col
      lg:px-32

      gap-4
      md:gap-8"
    >
      <div>
        <h2 className="text-xl font-bold lg:text-4xl">Kontakt / Contact</h2>
        <div className="flex flex-col gap-1">
          <Parapgraph className="italic">
            Välkommen att kontakta oss. Vår gemensamma mail är
            kennelbullworks@hotmail.com
            <br />
            Ni når oss också via våra sociala medier.
          </Parapgraph>
          <Parapgraph className="italic">
            Welcome to contact us. Our email is kennelbullworks@hotmail.com.
            <br />
            You can also contact us through our social media.
          </Parapgraph>
        </div>
      </div>

      <div
        className="
        flex

        md:flex-row
        flex-col

        gap-8
        lg:gap-20"
      >
        <div
          className="
          flex

          flex-col
          md:flex-row

          gap-4
          "
        >
          <ImageSize>
            <MyImage src={'/alex_bea_flora.jpeg'} alt="Alexander" />
          </ImageSize>
          <Parapgraph
            className="
            md:self-end
            "
          >
            Alexander Drottsgård <br />
            <a className="text-sky-400" href="tel:+46766399939">
              +46 766 39 99 39
            </a>
            <br />
          </Parapgraph>
        </div>

        <div
          className="
          flex

          flex-col
          md:flex-row

          gap-4
          "
        >
          <ImageSize>
            <MyImage src={'/filippa_bibbi_bianca_1.jpeg'} alt="Filippa" />
          </ImageSize>
          <Parapgraph
            className="
            md:self-end
            "
          >
            Filippa Drottsgård <br />
            <a className="text-sky-400" href="tel:+46733260486">
              +46 733 26 04 86
            </a>
          </Parapgraph>
        </div>
      </div>
    </div>
  );
}

function ImageSize({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
          relative
          rounded-[inherit]
          overflow-hidden

          w-96
          h-80


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
  src: string;
  alt: string;
};

function MyImage(props: MyImageProps) {
  return (
    <Image src={props.src} alt={props.alt} className="object-cover" fill />
  );
}
