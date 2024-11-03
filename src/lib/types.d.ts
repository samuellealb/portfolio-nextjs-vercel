import { Locale } from '@/i18n-config';

export interface TParams {
  params: { lang: Locale };
}

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

export interface TGetBioProps {
  text: string;
  image: Image;
  description: string;
  title: string;
}

export type TSocialIcon = {
  title: string;
  icon: {
    url: string;
    width: number;
    height: number;
  };
  url: string;
};

export interface TGetSocialIconsProps {
  items: TSocialIcon[];
}

export interface ILogo {
  url: string;
  title: string;
}

export interface IGetLogoProps {
  headerDesktop: ILogo;
  headerListPage: ILogo;
  headerMobile: ILogo;
  footerDesktop: ILogo;
  footerMobile: ILogo;
}
