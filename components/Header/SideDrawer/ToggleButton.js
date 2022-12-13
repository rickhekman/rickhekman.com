import styles from './ToggleButton.module.scss';

export default function ToggleButton(props) {

  return (
    <>
      <button type="button" className={styles.button} aria-label="Menu" onClick={props.click} id="togglebutton">
        <span className={styles.line}></span>
      </button>
    </>
  )
};
