export interface GetJobsProps {
  params: {
    id: string;
  };
}

export interface Jobs {
  id: number;
  title: string;
  genre: string;
  duration: number;
  location: string;
  year: number;
  tag: Tag;
  cover: Image;
  trailer: string;
  gallery: Image[];
  sinonpsis: string; // rich text
  crew: string; // rich text
  details: string; // rich text
}

export interface Tag {
  id: number;
  label: string;
  jobs: Jobs[];
}

export interface Image {
  src: string;
  alt: string;
}