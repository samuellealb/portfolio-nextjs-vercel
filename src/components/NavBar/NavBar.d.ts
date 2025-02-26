import { TCategory } from '@/src/lib/types';

export type TNavBar = {
  categories?: TCategory[];
  bioTitle: string;
  currentPath?: string;
};
