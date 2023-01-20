import Link from "next/link";
import Image from "next/image";

import styles from "./Project-item.module.scss";

export default function ProjectItem(props) {
  const { title, thumbnail, alt, intro, id } = props;
  console.log( "props", props);
  return <li className={styles.item}>
    <figure className={styles.thumbnail}>
      <Image
        src={'/' + thumbnail}
        alt={alt}
        fill
        className={styles.image}
        loading="lazy"
      />
    </figure>
    <div className={styles.description}>
      <Link href={`/projects/${id}`} className={styles.link}>
        <h2 className={styles.title}>
          {title}
        </h2>
      </Link>
      <p>
        {intro}
      </p>
    </div>
  </li>
}
