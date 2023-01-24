import TagItem from "./Tag-item";

import styles from "./Tags-list.module.scss";

export default function TagsList(props) {
  const tags  = props.items;

  return <ul className={styles.list}>
        {tags.map(tag => <TagItem
          key={tag}
          tag={tag}
          />
        )}
  </ul>
}
