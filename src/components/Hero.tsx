import Image from 'next/image';
import HeroImage from 'public/hero.png';
import ButtonLink, { ButtonVariant } from './Button';
import TextContent from './TextContent';

export default function Hero() {
  return (
    <div
      className="
          bg-brown-400 w-full
          py-12 lg:pt-24
          px-8
          flex
          flex-col
          gap-6

          md:flex-row
          md:items-center
          md:justify-evenly
          md:gap-0
          md:pl-28
          md:pr-0
        "
      style={{ height: '534px' }}
    >
      <TextContent
        title="En ärvd passion för hundar"
        content={
          <div className="flex gap-2 flex-col">
            <p className="md:max-w-lg">
              Vi är två syskon som tillsammans med våra respektive föder upp engelsk cocker spaniel.
              Vår passion för hundar har vi ärvt från våra föräldrar som har fött upp hundar sedan innan vi föddes.
            </p>
          </div>
        }
      />
      {/* kanske till Konakta oss ifall vi inte har valpar */}
      <div className="relative self-center w-64 h-64 md:w-[500px] md:h-full ">
        <Image
          src={HeroImage}
          fill
          alt="Cocker spaniel puppies"
          className="md:object-contain"
        />
      </div>
    </div>
  );
}
