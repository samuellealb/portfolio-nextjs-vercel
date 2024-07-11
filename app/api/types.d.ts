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
  category: Category;
  thumbnail: Image;
  cover: Image;
  trailer: string;
  gallery: Image[];
  sinopsis: string; // rich text
  crew: string; // rich text
  awardsAndExhibitions: string; // rich text
}

export interface Category {
  id: number;
  label: string;
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
