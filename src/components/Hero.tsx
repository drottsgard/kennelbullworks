import Image from 'next/image';

//import ImageBibbi from 'public/bibbi.jpeg';
//import ImageBeaValparKorg from 'public/bea_valpar_korg.jpeg';
//import ImageAlexFilippa from 'public/alex_filippa.jpg';

export default function Hero() {
  return (
    <div
      className="
          bg-brown-400 w-full
          py-12
          lg:pt-6
          px-8
          flex
          flex-col
          gap-6

          md:flex-row
          md:items-center
          md:justify-evenly
          md:gap-0
          md:pl-28
          md:pr-28
        "
      style={{ height: '534px' }}
    >
      <div
        className="
        relative
        self-center
        w-full
        h-full
        md:w-[800px]
        hidden
        lg:block
        md:h-full"
      >
        <Image
          src={'/bibbi.jpeg'}
          fill
          alt="Our dogs, Bea, Bianca, Bali and Bibbi"
          className="md:object-contain"
        />
      </div>
      <div className="relative self-center w-full h-full md:w-[800px] md:h-full brightness-125">
        <Image
          src={'/alex_filippa.jpg'}
          fill
          alt="Our dogs, Bea, Bianca, Bali and Bibbi"
          className="object-contain"
        />
      </div>
      <div
        className="
        relative
        self-center
        w-full
        h-full
        md:w-[800px]
        hidden
        lg:block
        md:h-full"
      >
        <Image
          src={'/bea_valpar_korg.jpeg'}
          fill
          alt="Our dogs, Bea, Bianca, Bali and Bibbi"
          className="md:object-contain"
        />
      </div>
    </div>
  );
}
