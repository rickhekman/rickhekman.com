import Link from 'next/link';
import LocaleSwitcher from '../../LocaleSwitcher';
import { useRouter } from 'next/router'

import styles from './SideDrawer.module.scss';


export default function SideDrawer(props) {

  const router = useRouter();
  const { locale } = router;

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
              <Link href="/" tabIndex={tabindex}>Home</Link>
            </li>
            <li className={styles.item} onClick={props.click}>
              <Link href="/projects" tabIndex={tabindex}>Projects</Link>
            </li>
            <li className={styles.item} onClick={props.click}>
              <Link href="/visual-diary" tabIndex={tabindex}>Visual diary</Link>
            </li>
          </ul>
          <div className={styles.locale}>
            <p className={styles.locale__lang}>Taal:  {locale}</p>
              <LocaleSwitcher />
          </div>
        </nav>
      </div>
    </>
  )
}
