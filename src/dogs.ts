export const dogs = {
  bea: {
    pedigreeName: 'Art-Wave´s Moonstruck',
    name: 'Bea',
    images: [{ src: '/Bea_1.jpeg', alt: 'Bea Valp' }],
    category: 1,
  },
  flora: {
    pedigreeName: 'Bullworks Superstar',
    name: 'Flora',
    images: [{ src: '/Bea_1.jpeg', alt: 'Bea Valp' }],
    category: 1,
  },
  ivy: {
    pedigreeName: 'Bullworks Lucky Star',
    name: 'Ivy',
    images: [{ src: '/Bea_1.jpeg', alt: 'Bea Valp' }],
    category: 1,
  },
  bali: {
    pedigreeName: 'Moonstruck One of Us',
    name: 'Bali',
    images: [{ src: '/Bea_1.jpeg', alt: 'Bea Valp' }],
    category: 1,
  },
  bianca: {
    pedigreeName: 'Cockerlykke Breathless',
    name: 'Bianca',
    images: [{ src: '/Bea_1.jpeg', alt: 'Bea Valp' }],
    category: 2,
  },
  bibbi: {
    pedigreeName: 'Bullworks Breathtaker',
    name: 'Bibbi',
    images: [{ src: '/Bea_1.jpeg', alt: 'Bea Valp' }],
    category: 2,
  },
} as const;

export type DogName = keyof typeof dogs;
