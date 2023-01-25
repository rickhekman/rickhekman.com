
import styles from './Layout-top.module.scss';

export default function LayoutTop({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}
