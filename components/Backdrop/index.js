import styles from './Backdrop.module.scss';

export default function Backdrop(props) {

  return (
    <div className={styles.backdrop} onClick={props.click} />
  )
}
