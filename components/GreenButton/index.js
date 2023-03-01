import Link from "next/link";

import styles from "./Green-button.module.scss";

export default function Button(props) {

  return (
    <Link href={props.link} id="greenbutton" className={styles.btn} target='_blank' rel='noopener noreferrer' aria-label={"Button " + props.text}>
      {props.text}
    </Link>
  );
}
