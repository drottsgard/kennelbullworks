import Image from 'next/image';
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
        "
      style={{ height: '534px' }}
    >
      <TextContent
        title="En ärvd passion för hundar"
        content={
          <p>
            Vi är glada att meddela att vi har valpar tillgängliga för att
            berika ditt liv med kärlek och glädje.
          </p>
        }
      />
      {/* kanske till Konakta oss ifall vi inte har valpar */}
      <div className="flex gap-2">
        <ButtonLink variant={ButtonVariant.Primary} onClick={() => {}}>
          Våra valpar
        </ButtonLink>
        <ButtonLink variant={ButtonVariant.Secondary} onClick={() => {}}>
          Om oss
        </ButtonLink>
      </div>
      <Image
        className="self-center"
        src="/hero.png"
        width={220}
        height={220}
        alt="Cocker spaniel puppies"
      />
    </div>
  );
}
