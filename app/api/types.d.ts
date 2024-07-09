export interface Job {
  id: number;
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
  sinonpsis: string; // rich text
  crew: string; // rich text
  details: string; // rich text
}

export interface Category {
  id: number;
  label: string;
}

export interface Image {
  src: string;
  alt: string;
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
