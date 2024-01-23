import Image from 'next/image';
import HeroImage from '../../public/hero.png';
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
          md:justify-between
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
            <p>
              Vi är glada att meddela att vi har valpar tillgängliga för att
              berika ditt liv med kärlek och glädje.
            </p>
            <div className="flex gap-2">
              <ButtonLink variant={ButtonVariant.Primary} onClick={() => {}}>
                Våra valpar
              </ButtonLink>
              <ButtonLink variant={ButtonVariant.Secondary} onClick={() => {}}>
                Om oss
              </ButtonLink>
            </div>
          </div>
        }
      />
      {/* kanske till Konakta oss ifall vi inte har valpar */}
      <div className="relative self-center w-52 h-52 md:w-full md:h-full ">
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
