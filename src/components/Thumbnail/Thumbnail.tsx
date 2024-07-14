import Image from "next/image";
import styles from "./Thumbnail.module.scss";
import type { TThumbnail } from "./Thumbnail.d";

export const Thumbnail = ({ slug, src, title }: TThumbnail) => {
  return (
    <article className={styles.thumbnail}>
      <a href={`/job/${slug}`} title={title}>
        <Image
          src={src}
          alt={title}
          width={230}
          height={210}
          className="grid-img"
        />
      </a>
    </article>
  );
};
