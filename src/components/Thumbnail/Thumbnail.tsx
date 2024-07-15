import Image from "next/image";
import Link from "next/link";
import styles from "./Thumbnail.module.scss";
import type { TThumbnail } from "./Thumbnail.d";

export const Thumbnail = ({ slug, src, title }: TThumbnail) => {
  return (
    <article className={styles.thumbnail}>
      <Link href={`/job/${slug}`} title={title}>
        <Image
          src={src}
          alt={title}
          fill
          className="grid-img"
        />
        </Link>
    </article>
  );
};
