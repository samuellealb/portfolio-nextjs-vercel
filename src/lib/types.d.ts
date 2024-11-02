export interface TJob {
  sys: {
    id: string;
  };
  slug: string;
  title: string;
  genre: string;
  duration: number;
  location: string;
  year: number;
  categoryCollection: {
    items: TCategory[];
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

export interface TCategory {
  sys: {
    id: string;
  };
  label: string;
  slug: string;
}

export interface TImage {
  sys: {
    id: string;
  };
  url: string;
  title: string;
  width: number;
  height: number;
}

export interface TGetJobsProps {
  params: {
    slug: string;
  };
}
export interface TGetCategoriesProps {
  params: {
    slug: string;
  };
}
