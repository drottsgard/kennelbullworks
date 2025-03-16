import { dogs } from '@/dogs';
import Image from 'next/image';

export default function Bea() {
  return (
    <div className="p-6 lg:py-14">
      <h2 className="mb-3 lg:mb-8 text-l font-bold lg:text-2xl">
        {dogs.bea.name} <br /> {dogs.bea.pedigreeName}
      </h2>
      {dogs.bea.images.map((image) => {
        return (
          <div key={image.src} className="flex flex-col gap-4">
            <div className="lg:w-[600px]">
              <Image
                src={image.src}
                alt={image.alt}
                width={4032}
                height={3024}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// 4032 × 3024
