import Link from "next/link";

import styles from "./Green-button.module.scss";

export default function Button(props) {

  if (props.link) {
    return (
      <Link href={props.link} className={styles.btn} target='_blank' rel='noopener noreferrer' aria-label={"Button " + props.text}>
        {props.text}
      </Link>
    );
  }

  return (
    <button type="button" className={classes.btn} onClick={props.link}>
      {props.text}
    </button>
  );
}
