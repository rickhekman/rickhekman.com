import Link from 'next/link';
import Image from 'next/image';

import styles from './Project-item.module.scss';

export default function ProjectItem(props) {
  const { title, slug, thumbnail, alt, description, id} = props;

  return <li className={styles.item}>
      <Image src={'/' + thumbnail} alt={alt} className={styles.thumb} width={800} height={600}/>
      <Link href={`/projects/${id}`} as={`/projects/${slug}`} className={styles.link}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <p>{description}</p>
  </li>
}
