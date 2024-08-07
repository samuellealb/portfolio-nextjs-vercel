export interface Job {
  sys: {
    id: number;
  };
  slug: string;
  title: string;
  genre: string;
  duration: number;
  location: string;
  year: number;
  categoryCollection: {
    items: Category[];
  };
  thumbnail: Image;
  cover: Image;
  videoEmbedCode: string;
  galleryCollection: {
    items: Image[];
  };
  sinopsis: string[];
  crew: string[];
  awardsAndExhibitions: string[];
}

export interface Category {
  sys: {
    id: number;
  };
  label: string;
  slug: string;
}

export interface Image {
  url: string;
  title: string;
}

export interface GetJobsProps {
  params: {
    slug: string;
  };
}
export interface GetCategoriesProps {
  params: {
    slug: string;
  };
}
