import Link from "next/link";
import Image from "next/image";

import styles from "./Project-item.module.scss";

export default function ProjectItem(props) {
  const { title, thumbnail, alt, intro, id } = props;

  return <li className={styles.item}>
    <Image src={'/' + thumbnail} alt={alt} width={800} height={600} className={styles.thumbnail}/>
    <Link
      href={`/projects/[projects]?project=${id}`}
      as={`/projects/${id}`}
      className={styles.link}
    >
      <h2 className={styles.title}>
        {title}
      </h2>
    </Link>
    <p>
      {intro}
    </p>
  </li>
}
