import Link from 'next/link';

import styles from './SideDrawer.module.scss';


export default function SideDrawer(props) {

  let drawerClasses = styles.sidedrawer;
  if (props.show) {
    drawerClasses = `${styles.sidedrawer} ${styles.open}`;
  }

  let tabindex = -1;
  if (props.show) {
    tabindex = 0;
  }

  return (
    <>
      <div className={drawerClasses}>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.item} onClick={props.click} >
              <Link href="/" tabindex={tabindex}>Home</Link>
            </li>
            <li className={styles.item} onClick={props.click}>
              <Link href="/projects" tabindex={tabindex}>Projects</Link>
            </li>
            <li className={styles.item} onClick={props.click}>
              <Link href="/visual-diary" tabindex={tabindex}>Visual diary</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
