
import styles from './Layout-center.module.scss';

export default function LayoutCenter({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}
