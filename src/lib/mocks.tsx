import { Job, Category } from './types';

export const categories: Category[] = [
  {
    sys: {
      id: 1,
    },
    label: 'Sci Fi',
    slug: 'sci-fi',
  },
  {
    sys: {
      id: 2,
    },
    label: 'Fantasy',
    slug: 'fantasy',
  },
];

export const jobs: Job[] = [
  {
    sys: {
      id: 1,
    },
    slug: 'the-matrix',
    title: 'The Matrix',
    genre: 'Action',
    duration: 136,
    location: 'Sydney',
    year: 1999,
    categoryCollection: {
      items: [
        {
          sys: {
            id: 1,
          },
          label: 'Sci Fi',
          slug: 'sci-fi',
        },
      ],
    },
    thumbnail: {
      url: 'https://placehold.co/230x210',
      title: 'The Matrix Thumbnail',
    },
    cover: {
      url: 'https://placehold.co/980x522',
      title: 'The Matrix',
    },
    vimeoVideoId: '144505730',
    galleryCollection: {
      items: [
        {
          url: 'https://placehold.co/980x522',
          title: 'The Matrix',
        },
        {
          url: 'https://placehold.co/980x522',
          title: 'The Matrix',
        },
        {
          url: 'https://placehold.co/980x522',
          title: 'The Matrix',
        },
      ],
    },
    sinopsis: [
      'The Matrix is a 1999 science fiction action film written and directed by the Wachowskis.',
    ],
    crew: ['Directed by: The Wachowskis'],
    awardsAndExhibitions: ['Oscar for Best Visual Effects'],
  },
  {
    sys: {
      id: 2,
    },
    slug: 'lord-of-the-rings',
    title: 'Lord of the Rings',
    genre: 'Fantasy',
    duration: 178,
    location: 'New Zealand',
    year: 2001,
    categoryCollection: {
      items: [
        {
          sys: {
            id: 2,
          },
          label: 'Fantasy',
          slug: 'fantasy',
        },
      ],
    },
    thumbnail: {
      url: 'https://placehold.co/230x210',
      title: 'Lord of the Rings Thumbnail',
    },
    cover: {
      url: 'https://placehold.co/980x522',
      title: 'Lord of the Rings',
    },
    vimeoVideoId: '144505730',
    galleryCollection: {
      items: [
        {
          url: 'https://placehold.co/980x522',
          title: 'Lord of the Rings',
        },
        {
          url: 'https://placehold.co/980x522',
          title: 'Lord of the Rings',
        },
        {
          url: 'https://placehold.co/980x522',
          title: 'Lord of the Rings',
        },
      ],
    },
    sinopsis: [
      'The Lord of the Rings is a 2001 fantasy film directed by Peter Jackson.',
    ],
    crew: ['Directed by: Peter Jackson'],
    awardsAndExhibitions: ['Oscar for Best Picture'],
  },
  {
    sys: {
      id: 3,
    },
    slug: 'star-wars',
    title: 'Star Wars',
    genre: 'Sci Fi',
    duration: 121,
    location: 'Tunisia',
    year: 1977,
    categoryCollection: {
      items: [
        {
          sys: {
            id: 1,
          },
          label: 'Sci Fi',
          slug: 'sci-fi',
        },
      ],
    },
    thumbnail: {
      url: 'https://placehold.co/230x210',
      title: 'Star Wars Thumbnail',
    },
    cover: {
      url: 'https://placehold.co/980x522',
      title: 'Star Wars',
    },
    vimeoVideoId: '144505730',
    galleryCollection: {
      items: [
        {
          url: 'https://placehold.co/980x522',
          title: 'Star Wars',
        },
        {
          url: 'https://placehold.co/980x522',
          title: 'Star Wars',
        },
        {
          url: 'https://placehold.co/980x522',
          title: 'Star Wars',
        },
      ],
    },
    sinopsis: [
      'Star Wars is a 1977 space opera film written and directed by George Lucas.',
    ],
    crew: ['Directed by: George Lucas'],
    awardsAndExhibitions: ['Oscar for Best Art Direction'],
  },
  {
    sys: {
      id: 4,
    },
    slug: 'jurassic-park',
    title: 'Jurassic Park',
    genre: 'Sci Fi',
    duration: 127,
    location: 'Hawaii',
    year: 1993,
    categoryCollection: {
      items: [
        {
          sys: {
            id: 1,
          },
          label: 'Sci Fi',
          slug: 'sci-fi',
        },
      ],
    },
    thumbnail: {
      url: 'https://placehold.co/230x210',
      title: 'Jurassic Park Thumbnail',
    },
    cover: {
      url: 'https://placehold.co/980x522',
      title: 'Jurassic Park',
    },
    vimeoVideoId: '144505730',
    galleryCollection: {
      items: [
        {
          url: 'https://placehold.co/980x522',
          title: 'Jurassic Park',
        },
        {
          url: 'https://placehold.co/980x522',
          title: 'Jurassic Park',
        },
        {
          url: 'https://placehold.co/980x522',
          title: 'Jurassic Park',
        },
      ],
    },
    sinopsis: [
      'Jurassic Park is a 1993 science fiction adventure film directed by Steven Spielberg.',
    ],
    crew: ['Directed by: Steven Spielberg'],
    awardsAndExhibitions: ['Oscar for Best Sound Editing'],
  },
  {
    sys: {
      id: 5,
    },
    slug: 'avatar',
    title: 'Avatar',
    genre: 'Sci Fi',
    duration: 162,
    location: 'New Zealand',
    year: 2009,
    categoryCollection: {
      items: [
        {
          sys: {
            id: 1,
          },
          label: 'Sci Fi',
          slug: 'sci-fi',
        },
      ],
    },
    thumbnail: {
      url: 'https://placehold.co/230x210',
      title: 'Avatar Thumbnail',
    },
    cover: {
      url: 'https://placehold.co/980x522',
      title: 'Avatar',
    },
    vimeoVideoId: '144505730',
    galleryCollection: {
      items: [
        {
          url: 'https://placehold.co/980x522',
          title: 'Avatar',
        },
        {
          url: 'https://placehold.co/980x522',
          title: 'Avatar',
        },
      ],
    },
    sinopsis: [
      'Avatar is a 2009 science fiction film directed by James Cameron.',
    ],
    crew: ['Directed by: James Cameron'],
    awardsAndExhibitions: ['Oscar for Best Cinematography'],
  },
  {
    sys: {
      id: 6,
    },
    slug: 'inception',
    title: 'Inception',
    genre: 'Sci Fi',
    duration: 148,
    location: 'Paris',
    year: 2010,
    categoryCollection: {
      items: [
        {
          sys: {
            id: 1,
          },
          label: 'Sci Fi',
          slug: 'sci-fi',
        },
      ],
    },
    thumbnail: {
      url: 'https://placehold.co/230x210',
      title: 'Inception Thumbnail',
    },
    cover: {
      url: 'https://placehold.co/980x522',
      title: 'Inception',
    },
    vimeoVideoId: '144505730',
    galleryCollection: {
      items: [
        {
          url: 'https://placehold.co/980x522',
          title: 'Inception',
        },
        {
          url: 'https://placehold.co/980x522',
          title: 'Inception',
        },
        {
          url: 'https://placehold.co/980x522',
          title: 'Inception',
        },
      ],
    },
    sinopsis: [
      'Inception is a 2010 science fiction action film written and directed by Christopher Nolan.',
    ],
    crew: ['Directed by: Christopher Nolan'],
    awardsAndExhibitions: ['Oscar for Best Visual Effects'],
  },
  {
    sys: {
      id: 7,
    },
    slug: 'interstellar',
    title: 'Interstellar',
    genre: 'Sci Fi',
    duration: 169,
    location: 'Alberta',
    year: 2014,
    categoryCollection: {
      items: [
        {
          sys: {
            id: 1,
          },
          label: 'Sci Fi',
          slug: 'sci-fi',
        },
      ],
    },
    thumbnail: {
      url: 'https://placehold.co/230x210',
      title: 'Interstellar Thumbnail',
    },
    cover: {
      url: 'https://placehold.co/980x522',
      title: 'Interstellar',
    },
    vimeoVideoId: '144505730',
    galleryCollection: {
      items: [
        {
          url: 'https://placehold.co/980x522',
          title: 'Interstellar',
        },
        {
          url: 'https://placehold.co/980x522',
          title: 'Interstellar',
        },
      ],
    },
    sinopsis: [
      'Interstellar is a 2014 science fiction film directed by Christopher Nolan.',
    ],
    crew: ['Directed by: Christopher Nolan'],
    awardsAndExhibitions: ['Oscar for Best Visual Effects'],
  },
  {
    sys: {
      id: 8,
    },
    slug: 'blade-runner',
    title: 'Blade Runner',
    genre: 'Sci Fi',
    duration: 117,
    location: 'Los Angeles',
    year: 1982,
    categoryCollection: {
      items: [
        {
          sys: {
            id: 1,
          },
          label: 'Sci Fi',
          slug: 'sci-fi',
        },
      ],
    },
    thumbnail: {
      url: 'https://placehold.co/230x210',
      title: 'Blade Runner Thumbnail',
    },
    cover: {
      url: 'https://placehold.co/980x522',
      title: 'Blade Runner',
    },
    vimeoVideoId: '144505730',
    galleryCollection: {
      items: [
        {
          url: 'https://placehold.co/980x522',
          title: 'Blade Runner',
        },
        {
          url: 'https://placehold.co/980x522',
          title: 'Blade Runner',
        },
        {
          url: 'https://placehold.co/980x522',
          title: 'Blade Runner',
        },
      ],
    },
    sinopsis: [
      'Blade Runner is a 1982 science fiction film directed by Ridley Scott.',
    ],
    crew: ['Directed by: Ridley Scott'],
    awardsAndExhibitions: ['Oscar for Best Visual Effects'],
  },
  {
    sys: {
      id: 9,
    },
    slug: 'the-fifth-element',
    title: 'The Fifth Element',
    genre: 'Sci Fi',
    duration: 126,
    location: 'New York',
    year: 1997,
    categoryCollection: {
      items: [
        {
          sys: {
            id: 1,
          },
          label: 'Sci Fi',
          slug: 'sci-fi',
        },
      ],
    },
    thumbnail: {
      url: 'https://placehold.co/230x210',
      title: 'The Fifth Element Thumbnail',
    },
    cover: {
      url: 'https://placehold.co/980x522',
      title: 'The Fifth Element',
    },
    vimeoVideoId: '144505730',
    galleryCollection: {
      items: [
        {
          url: 'https://placehold.co/980x522',
          title: 'The Fifth Element',
        },
      ],
    },
    sinopsis: [
      'The Fifth Element is a 1997 science fiction action film directed by Luc Besson.',
    ],
    crew: ['Directed by: Luc Besson'],
    awardsAndExhibitions: ['Oscar for Best Costume Design'],
  },
];
