import styles from './Tag-item.module.scss';

export default function TagItem(props) {
  const { tag } = props;

  return <li className={styles.item}>
      <p>
        {tag}
      </p>
  </li>
}
