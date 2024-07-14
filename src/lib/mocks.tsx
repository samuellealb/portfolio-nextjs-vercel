import { Job, Category } from "./types";

export const categories: Category[] = [
  {
    sys: {
      id: 1,
    },
    label: "Sci Fi",
    slug: "sci-fi",
  },
  {
    sys: {
      id: 2,
    },
    label: "Fantasy",
    slug: "fantasy",
  },
];

export const jobs: Job[] = [
  {
    sys: {
      id: 1,
    },
    slug: "the-matrix",
    title: "The Matrix",
    genre: "Action",
    duration: 136,
    location: "Sydney",
    year: 1999,
    categoryCollection: {
      items: [
        {
          sys: {
            id: 1,
          },
          label: "Sci Fi",
          slug: "sci-fi",
        },
      ],
    },
    thumbnail: {
      url: "https://placehold.co/230x210",
      title: "The Matrix Thumbnail",
    },
    cover: {
      url: "https://placehold.co/980x522",
      title: "The Matrix",
    },
    trailer: "https://www.youtube.com/watch?v=m8e-FF8MsqU",
    gallery: [
      {
        url: "https://placehold.co/980x522",
        title: "The Matrix",
      },
      {
        url: "https://placehold.co/980x522",
        title: "The Matrix",
      },
      {
        url: "https://placehold.co/980x522",
        title: "The Matrix",
      },
    ],
    sinopsis:
      "The Matrix is a 1999 science fiction action film written and directed by the Wachowskis.",
    crew: "Directed by: The Wachowskis",
    awardsAndExhibitions: "Oscar for Best Visual Effects",
  },
  {
    sys: {
      id: 2,
    },
    slug: "lord-of-the-rings",
    title: "Lord of the Rings",
    genre: "Fantasy",
    duration: 178,
    location: "New Zealand",
    year: 2001,
    categoryCollection: {
      items: [
        {
          sys: {
            id: 2,
          },
          label: "Fantasy",
          slug: "fantasy",
        },
      ],
    },
    thumbnail: {
      url: "https://placehold.co/230x210",
      title: "Lord of the Rings Thumbnail",
    },
    cover: {
      url: "https://placehold.co/980x522",
      title: "Lord of the Rings",
    },
    trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4",
    gallery: [
      {
        url: "https://placehold.co/980x522",
        title: "Lord of the Rings",
      },
      {
        url: "https://placehold.co/980x522",
        title: "Lord of the Rings",
      },
      {
        url: "https://placehold.co/980x522",
        title: "Lord of the Rings",
      },
    ],
    sinopsis:
      "The Lord of the Rings is a 2001 fantasy film directed by Peter Jackson.",
    crew: "Directed by: Peter Jackson",
    awardsAndExhibitions: "Oscar for Best Picture",
  },
];
