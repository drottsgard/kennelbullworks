// weird name -_-
export const DOG_OWNER = {
  Alexander: 1,
  Filippa: 2,
  Jens: 3,
} as const;

type DogOwner = (typeof DOG_OWNER)[keyof typeof DOG_OWNER];

export type DogInformation = {
  pedigreeName: string;
  name: string;
  images: { src: string; alt: string }[];
  category: DogOwner;
};

export const DOGS: Record<string, DogInformation> = {
  bea: {
    pedigreeName: 'Art-Wave´s Moonstruck',
    name: 'Bea',
    images: [{ src: '/bea_2.jpeg', alt: 'Art-Wave´s Moonstruck - Bea' }],
    category: DOG_OWNER.Alexander,
  },
  flora: {
    pedigreeName: 'Bullworks Starstruck',
    name: 'Flora',
    images: [{ src: '/flora_2.jpeg', alt: 'Bullworks Starstruck - Flora' }],
    category: DOG_OWNER.Alexander,
  },
  ivy: {
    pedigreeName: 'Bullworks Lucky Star',
    name: 'Ivy',
    images: [{ src: '/ivy_2.jpeg', alt: 'Bullworks Lucky Star - Ivy' }],
    category: DOG_OWNER.Alexander,
  },
  bali: {
    pedigreeName: 'Moonstruck One of Us',
    name: 'Bali',
    images: [{ src: '/bali_1.jpeg', alt: 'Moonstruck One of Us - Bali' }],
    category: DOG_OWNER.Alexander,
  },

  bianca: {
    pedigreeName: 'Cockerlykke Breathless',
    name: 'Bianca',
    images: [{ src: '/bianca.jpeg', alt: 'Cockerlykke Breathless - Bianca' }],
    category: DOG_OWNER.Filippa,
  },
  bibbi: {
    pedigreeName: 'Bullworks Breathtaker',
    name: 'Bibbi',
    images: [
      { src: '/bibbi_suddig.jpg', alt: 'Bullworks Breathtaker - Bibbi' },
    ],
    category: DOG_OWNER.Filippa,
  },

  boy: {
    pedigreeName: 'Bullworks Starboy',
    name: 'Boy',
    images: [{ src: '/boy.jpeg', alt: 'Bullworks Starboy - Boy' }],
    category: DOG_OWNER.Jens,
  },
};

export const otherDogs: Record<string, DogInformation> = {};

export type DogName = keyof typeof DOGS;
