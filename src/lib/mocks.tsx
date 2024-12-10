import { TJob, TCategory } from './types';
import { imageFactory } from './factory';

export const categories: TCategory[] = [
  {
    sys: {
      id: '1',
    },
    label: 'Sci Fi',
    slug: 'sci-fi',
  },
  {
    sys: {
      id: '2',
    },
    label: 'Fantasy',
    slug: 'fantasy',
  },
  {
    sys: {
      id: '3',
    },
    label: 'Action',
    slug: 'action',
  },
  {
    sys: {
      id: '4',
    },
    label: 'Adventure',
    slug: 'adventure',
  },
  {
    sys: {
      id: '5',
    },
    label: 'Drama',
    slug: 'drama',
  },
  {
    sys: {
      id: '6',
    },
    label: 'Horror',
    slug: 'horror',
  },
  {
    sys: {
      id: '7',
    },
    label: 'Comedy',
    slug: 'comedy',
  },
];

export const jobs: TJob[] = [
  {
    sys: {
      id: '1',
    },
    slug: 'the-matrix',
    title: 'The Matrix',
    genre: 'Action',
    duration: 136,
    location: 'Sydney',
    locale: 'fr',
    year: 1999,
    categoryCollection: {
      items: [
        {
          sys: {
            id: '1',
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
    videoEmbedCode:
      '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/Wg7V2_OBXwQ?si=4pcTp-wAgmhEInon" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    galleryCollection: {
      items: imageFactory(15),
    },
    sinopsis: [
      'The Matrix is a 1999 science fiction action film written and directed by the Wachowskis.',
    ],
    crew: ['Directed by: The Wachowskis'],
    awardsAndExhibitions: ['Oscar for Best Visual Effects'],
  },
  {
    sys: {
      id: '2',
    },
    slug: 'lord-of-the-rings',
    title: 'Lord of the Rings',
    genre: 'Fantasy',
    duration: 178,
    location: 'New Zealand',
    locale: 'fr',
    year: 2001,
    categoryCollection: {
      items: [
        {
          sys: {
            id: '2',
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
    videoEmbedCode:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/144505730?h=8f174d08f5&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    galleryCollection: {
      items: imageFactory(15),
    },
    sinopsis: [
      'The Lord of the Rings is a 2001 fantasy film directed by Peter Jackson.',
    ],
    crew: ['Directed by: Peter Jackson'],
    awardsAndExhibitions: ['Oscar for Best Picture'],
  },
  {
    sys: {
      id: '3',
    },
    slug: 'star-wars',
    title: 'Star Wars',
    genre: 'Sci Fi',
    duration: 121,
    location: 'Tunisia',
    locale: 'fr',
    year: 1977,
    categoryCollection: {
      items: [
        {
          sys: {
            id: '1',
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
    videoEmbedCode:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/144505730?h=8f174d08f5&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    galleryCollection: {
      items: imageFactory(15),
    },
    sinopsis: [
      'Star Wars is a 1977 space opera film written and directed by George Lucas.',
    ],
    crew: ['Directed by: George Lucas'],
    awardsAndExhibitions: ['Oscar for Best Art Direction'],
  },
  {
    sys: {
      id: '4',
    },
    slug: 'jurassic-park',
    title: 'Jurassic Park',
    genre: 'Sci Fi',
    duration: 127,
    location: 'Hawaii',
    locale: 'fr',
    year: 1993,
    categoryCollection: {
      items: [
        {
          sys: {
            id: '1',
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
    videoEmbedCode:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/144505730?h=8f174d08f5&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    galleryCollection: {
      items: imageFactory(15),
    },
    sinopsis: [
      'Jurassic Park is a 1993 science fiction adventure film directed by Steven Spielberg.',
    ],
    crew: ['Directed by: Steven Spielberg'],
    awardsAndExhibitions: ['Oscar for Best Sound Editing'],
  },
  {
    sys: {
      id: '5',
    },
    slug: 'avatar',
    title: 'Avatar',
    genre: 'Sci Fi',
    duration: 162,
    location: 'New Zealand',
    locale: 'fr',
    year: 2009,
    categoryCollection: {
      items: [
        {
          sys: {
            id: '1',
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
    videoEmbedCode:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/144505730?h=8f174d08f5&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    galleryCollection: {
      items: imageFactory(15),
    },
    sinopsis: [
      'Avatar is a 2009 science fiction film directed by James Cameron.',
    ],
    crew: ['Directed by: James Cameron'],
    awardsAndExhibitions: ['Oscar for Best Cinematography'],
  },
  {
    sys: {
      id: '6',
    },
    slug: 'inception',
    title: 'Inception',
    genre: 'Sci Fi',
    duration: 148,
    location: 'Paris',
    locale: 'fr',
    year: 2010,
    categoryCollection: {
      items: [
        {
          sys: {
            id: '1',
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
    videoEmbedCode:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/144505730?h=8f174d08f5&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    galleryCollection: {
      items: imageFactory(15),
    },
    sinopsis: [
      'Inception is a 2010 science fiction action film written and directed by Christopher Nolan.',
    ],
    crew: ['Directed by: Christopher Nolan'],
    awardsAndExhibitions: ['Oscar for Best Visual Effects'],
  },
  {
    sys: {
      id: '7',
    },
    slug: 'interstellar',
    title: 'Interstellar',
    genre: 'Sci Fi',
    duration: 169,
    location: 'Alberta',
    locale: 'fr',
    year: 2014,
    categoryCollection: {
      items: [
        {
          sys: {
            id: '1',
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
    videoEmbedCode:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/144505730?h=8f174d08f5&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    galleryCollection: {
      items: imageFactory(15),
    },
    sinopsis: [
      'Interstellar is a 2014 science fiction film directed by Christopher Nolan.',
    ],
    crew: ['Directed by: Christopher Nolan'],
    awardsAndExhibitions: ['Oscar for Best Visual Effects'],
  },
  {
    sys: {
      id: '8',
    },
    slug: 'blade-runner',
    title: 'Blade Runner',
    genre: 'Sci Fi',
    duration: 117,
    location: 'Los Angeles',
    locale: 'fr',
    year: 1982,
    categoryCollection: {
      items: [
        {
          sys: {
            id: '1',
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
    videoEmbedCode:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/144505730?h=8f174d08f5&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    galleryCollection: {
      items: imageFactory(15),
    },
    sinopsis: [
      'Blade Runner is a 1982 science fiction film directed by Ridley Scott.',
    ],
    crew: ['Directed by: Ridley Scott'],
    awardsAndExhibitions: ['Oscar for Best Visual Effects'],
  },
  {
    sys: {
      id: '9',
    },
    slug: 'the-fifth-element',
    title: 'The Fifth Element',
    genre: 'Sci Fi',
    duration: 126,
    location: 'New York',
    locale: 'fr',
    year: 1997,
    categoryCollection: {
      items: [
        {
          sys: {
            id: '1',
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
    videoEmbedCode:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/144505730?h=8f174d08f5&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    galleryCollection: {
      items: imageFactory(15),
    },
    sinopsis: [
      'The Fifth Element is a 1997 science fiction action film directed by Luc Besson.',
    ],
    crew: ['Directed by: Luc Besson'],
    awardsAndExhibitions: ['Oscar for Best Costume Design'],
  },
];

export const logos = {
  homeLogo: {
    url: '/imgs/logo.svg',
    title: 'Logo Home',
  },
  pagesLogo: {
    url: '/imgs/logo2.svg',
    title: 'Logo List Page',
  },
  mobileLogo: {
    url: '/imgs/logo3.svg',
    title: 'Logo Mobile',
  },
  footerDesktop: {
    url: '/imgs/footer.svg',
    title: 'Footer Desktop',
  },
  footerMobile: {
    url: '/imgs/footer3.svg',
    title: 'Footer Mobile',
  },
};

export const socialIcons = {
  items: [
    {
      title: 'Facebook',
      url: 'https://www.facebook.com',
      icon: {
        url: '/imgs/facebook.svg',
        title: 'Facebook',
        width: 32,
        height: 32,
      },
    },
    {
      title: 'Vimeo',
      url: 'https://www.vimeo.com',
      icon: {
        url: '/imgs/vimeo.svg',
        title: 'Vimeo',
        width: 32,
        height: 32,
      },
    },
  ],
};
