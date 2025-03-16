import { dogs } from '@/dogs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
    <div className="">
      <Link href={`/hundar/${name.toLowerCase()}`}>
        <h3 className="mb-3 lg:mb-5 text-lg font-bold lg:text-xl">
          {name} <br /> {pedigreeName}
        </h3>

        {image}
      </Link>
    </div>
  );
}

export default function page() {
  const leftDogs = Object.values(dogs).filter(($) => $.category === 1);
  const rightDogs = Object.values(dogs).filter(($) => $.category === 2);
  return (
    <div className="p-4 flex flex-col lg:px-20 lg:w-1/2">
      <h2 className="mb-3 lg:mb-8 text-xl font-bold lg:text-4xl">
        Våra hundar
      </h2>
      <div className="flex gap-8">
        <div>
          {leftDogs.map((dog) => {
            return (
              <Dog
                key={dog.name}
                name={dog.name}
                pedigreeName={dog.pedigreeName}
                image={
                  <Image
                    src={dog.images[0].src}
                    alt={dog.images[0].alt}
                    width={4032}
                    height={3024}
                  />
                }
              />
            );
          })}
        </div>
        <div>
          {rightDogs.map((dog) => {
            return (
              <Dog
                key={dog.name}
                name={dog.name}
                pedigreeName={dog.pedigreeName}
                image={
                  <Image
                    src={dog.images[0].src}
                    alt={dog.images[0].alt}
                    width={4032}
                    height={3024}
                  />
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
