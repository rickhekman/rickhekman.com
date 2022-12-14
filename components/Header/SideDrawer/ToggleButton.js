import styles from './ToggleButton.module.scss';

export default function ToggleButton(props) {

  return (
    <>
      <button type="button" className={styles.button} aria-label="Open the menu" onClick={props.click} id="togglebutton">
        <span className={styles.line} aria-hidden="true"></span>
      </button>
    </>
  )
};
