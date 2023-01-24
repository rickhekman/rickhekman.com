import Link from "next/link";
import Image from "next/image";

import TagsList from "./Tags-list";
import styles from "./Project-item.module.scss";

export default function ProjectItem(props) {
  const { title, image, alt, intro, id, tags } = props;

  return <li className={styles.item}>
    <figure className={styles.figure}>
      <Image
        src={'/' + image}
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
      <p className={styles.intro}>
        {intro}
      </p>
      <div className={styles.tags}>
        <TagsList items={tags}/>
      </div>
    </div>
  </li>
}
