import Image from "next/image";
import type { TThumbnail } from "./Thumbnail.d";

export const Thumbnail = ({ url, title }: TThumbnail) => {
  return (
    <article className="post col-xs-12 col-sm-6 col-lg-3">
      <a href="#" title={title}>
        <Image
          src={url}
          alt={title}
          width={300}
          height={200}
          className="grid-img"
        />
      </a>
    </article>
  );
};
