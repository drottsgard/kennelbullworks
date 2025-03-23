import Image from 'next/image';
import { redirect } from 'next/navigation';

import { DogName, DOGS } from '@/dogs';

export default async function Page({
  params,
}: {
  params: Promise<{ dog: DogName }>;
}) {
  const { dog } = await params;

  const dogData = DOGS[dog];

  if (!dogData) {
    redirect('/hundar');
  }

  return (
    <div className="p-6 lg:py-14">
      <h2 className="mb-3 lg:mb-8 text-l font-bold lg:text-2xl">
        {dogData.name} <br /> {dogData.pedigreeName}
      </h2>
      {dogData.images.map((image) => {
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
