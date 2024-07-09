import { Jobs } from './types';

export const jobs: Jobs[] = [
  {
    id: 1,
    title: 'The Matrix',
    genre: 'Action',
    duration: 136,
    location: 'Sydney',
    year: 1999,
    tag: {
      id: 1,
      label: 'Sci-Fi',
      jobs: [],
    },
    cover: {
      src: 'https://via.placeholder.com/300x400',
      alt: 'The Matrix',
    },
    trailer: 'https://www.youtube.com/watch?v=m8e-FF8MsqU',
    gallery: [
      {
        src: 'https://via.placeholder.com/300x400',
        alt: 'The Matrix',
      },
      {
        src: 'https://via.placeholder.com/300x400',
        alt: 'The Matrix',
      },
      {
        src: 'https://via.placeholder.com/300x400',
        alt: 'The Matrix',
      },
    ],
    sinonpsis: 'The Matrix is a 1999 science fiction action film written and directed by the Wachowskis.',
    crew: 'Directed by: The Wachowskis',
    details: 'The Matrix is a 1999 science fiction action film written and directed by the Wachowskis.',
  },
  {
    id: 2,
    title: 'The Matrix Reloaded',
    genre: 'Action',
    duration: 138,
    location: 'Sydney',
    year: 2003,
    tag: {
      id: 1,
      label: 'Sci-Fi',
      jobs: [],
    },
    cover: {
      src: 'https://via.placeholder.com/300x400',
      alt: 'The Matrix Reloaded',
    },
    trailer: 'https://www.youtube.com/watch?v=2F7Hw8vO5is',
    gallery: [
      {
        src: 'https://via.placeholder.com/300x400',
        alt: 'The Matrix Reloaded',
      },
      {
        src: 'https://via.placeholder.com/300x400',
        alt: 'The Matrix Reloaded',
      },
      {
        src: 'https://via.placeholder.com/300x400',
        alt: 'The Matrix Reloaded',
      },
    ],
    sinonpsis: 'The Matrix Reloaded is a 2003 science fiction action film written and directed by the Wachowskis.',
    crew: 'Directed by: The Wachowskis',
    details: 'The Matrix Reloaded is a 2003 science fiction action film written and directed by the Wachowskis.',
  },
];