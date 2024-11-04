'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Thumbnail.module.scss';
import type { TThumbnail } from './Thumbnail.d';
import { LocaleContext } from '@/src/context/LocaleContext';
import { useContext } from 'react';

export const Thumbnail = ({ slug, src, title }: TThumbnail) => {
  const { locale } = useContext(LocaleContext);

  return (
    <article className={styles.thumbnail}>
      <Link href={`/${locale}/job/${slug}`} title={title}>
        <Image src={src} alt={title} fill className="grid-img" />
      </Link>
    </article>
  );
};
