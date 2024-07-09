import { Jobs } from './types';

export const jobs: Jobs[] = [
  {
    id: 1,
    title: 'The Matrix',
    genre: 'Action',
    duration: 136,
    location: 'Sydney',
    year: 1999,
    category: {
      id: 1,
      label: 'sci-fi',
    },
    thumbnail: {
      src: 'https://dummyimage.com/230x210',
      alt: 'The Matrix Thumbnail',
    },
    cover: {
      src: 'https://dummyimage.com/980x522',
      alt: 'The Matrix',
    },
    trailer: 'https://www.youtube.com/watch?v=m8e-FF8MsqU',
    gallery: [
      {
        src: 'https://dummyimage.com/980x522',
        alt: 'The Matrix',
      },
      {
        src: 'https://dummyimage.com/980x522',
        alt: 'The Matrix',
      },
      {
        src: 'https://dummyimage.com/980x522',
        alt: 'The Matrix',
      },
    ],
    sinonpsis: 'The Matrix is a 1999 science fiction action film written and directed by the Wachowskis.',
    crew: 'Directed by: The Wachowskis',
    details: 'The Matrix is a 1999 science fiction action film written and directed by the Wachowskis.',
  },
  {
    id: 2,
    title: 'Lord of the Rings',
    genre: 'Fantasy',
    duration: 178,
    location: 'New Zealand',
    year: 2001,
    category: {
      id: 2,
      label: 'fantasy',
    },
    thumbnail: {
      src: 'https://dummyimage.com/230x210',
      alt: 'Lord of the Rings Thumbnail',
    },
    cover: {
      src: 'https://dummyimage.com/980x522',
      alt: 'Lord of the Rings',
    },
    trailer: 'https://www.youtube.com/watch?v=V75dMMIW2B4',
    gallery: [
      {
        src: 'https://dummyimage.com/980x522',
        alt: 'Lord of the Rings',
      },
      {
        src: 'https://dummyimage.com/980x522',
        alt: 'Lord of the Rings',
      },
      {
        src: 'https://dummyimage.com/980x522',
        alt: 'Lord of the Rings',
      },
    ],
    sinonpsis: 'The Lord of the Rings is a 2001 fantasy film directed by Peter Jackson.',
    crew: 'Directed by: Peter Jackson',
    details: 'The Lord of the Rings is a 2001 fantasy film directed by Peter Jackson.',
  },
];