import Image from "next/image";
import type { TThumbnail } from "./Thumbnail.d";

export const Thumbnail = ({ id, src, title }: TThumbnail) => {
  return (
    <article className="post col-xs-12 col-sm-6 col-lg-3">
      <a href={`/job/${id}`} title={title}>
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
