import Image from 'next/image';
import Link from 'next/link';

import { DogInformation, DOG_OWNER, DOGS } from '@/dogs';

function Dog({
  name,
  pedigreeName,
  image,
}: {
  name: string;
  pedigreeName: string;
  image: React.ReactNode;
}) {
  return (
    <div className="bg-brown-400 rounded-lg">
      <Link href={`/hundar/${name.toLowerCase()}`}>
        <h3 className="mb-3 lg:mb-5 text-lg lg:text-xl p-2">
          {name} <br /> {pedigreeName}
        </h3>
        <div
          className="
          relative
          rounded-[inherit]
          overflow-hidden

          aspect-[4/3]

          md:w-[322px]
          lg:w-[450px]
          xl:w-[560px]
          "
        >
          {image}
        </div>
      </Link>
    </div>
  );
}

export default function page() {
  return (
    <div>
      <KennelDogs />
      <OtherDogs />
    </div>
  );
}

function KennelDogs() {
  const leftDogs = Object.values(DOGS).filter(
    ($) => $.category === DOG_OWNER.Alexander,
  );
  const rightDogs = Object.values(DOGS).filter(
    ($) => $.category === DOG_OWNER.Filippa,
  );

  return (
    <DogsSection
      leftDogs={leftDogs}
      rightDogs={rightDogs}
      topSlot={
        <div className="mb-3 lg:mb-8">
          <h2 className="text-xl font-bold lg:text-4xl">
            Våra hundar / Our dogs
          </h2>
          <span className="italic">
            Klicka på hunden för att komma till dess sida.
            <br />
            Click on the dog to go to its page.
          </span>
        </div>
      }
    />
  );
}

function OtherDogs() {
  const leftDogs = Object.values(DOGS).filter(
    ($) => $.category === DOG_OWNER.Jens,
  );

  return (
    <DogsSection
      leftDogs={leftDogs}
      topSlot={
        <div className="mb-3 lg:mb-8">
          <h2 className="text-xl font-bold lg:text-4xl">
            Hundar från oss / Dogs from us
          </h2>
        </div>
      }
    />
  );
}

type MyImageProps = {
  src: string;
  alt: string;
}

function MyImage({ src, alt }: MyImageProps) {
  return <Image src={src} alt={alt} className="object-fill" fill />;
}

type DogsSectionProps = {
  leftDogs: DogInformation[];
  rightDogs?: DogInformation[];
  topSlot: React.ReactNode;
};

function DogsSection(props: DogsSectionProps) {
  const { leftDogs, rightDogs } = props;

  return (
    <div className="p-4 md:py-8 flex flex-col lg:px-32">
      {props.topSlot}

      <div
        className="
        flex
        gap-8
        lg:gap-14
        xl:gap-20
        md:flex-row
        flex-col
        "
      >
        <div className="flex flex-col gap-4">
          {leftDogs.map((dog) => {
            return (
              <Dog
                key={dog.name}
                name={dog.name}
                pedigreeName={dog.pedigreeName}
                image={
                  <MyImage src={dog.images[0].src} alt={dog.images[0].alt} />
                }
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          {rightDogs != null &&
            rightDogs.map((dog) => {
              return (
                <Dog
                  key={dog.name}
                  name={dog.name}
                  pedigreeName={dog.pedigreeName}
                  image={
                    <MyImage src={dog.images[0].src} alt={dog.images[0].alt} />
                  }
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
