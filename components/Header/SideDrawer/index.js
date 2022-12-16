import Link from 'next/link';
import LocaleSwitcher from '../../LocaleSwitcher';
import { useRouter } from 'next/router';

import en from './translations/en';
import es from './translations/es';
import nl from './translations/nl';

import styles from './SideDrawer.module.scss';


export default function SideDrawer(props) {

  const router = useRouter();
  const { locale } = router;
  let t = locale;
  if (t === 'en') {
    t = en;
  } else if (t === 'es') {
    t = es;
  } else {
    t = nl;
  };

  let drawerClasses = styles.sidedrawer;
  let tabindex = -1;

  if (props.show) {
    drawerClasses = `${styles.sidedrawer} ${styles.open}`;
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
              <Link href="/projects" tabIndex={tabindex}>{t.projects}</Link>
            </li>
            <li className={styles.item} onClick={props.click}>
              <Link href="/visual-diary" tabIndex={tabindex}>{t.visual}</Link>
            </li>
          </ul>
          <div className={styles.locale}>
            <p className={styles.locale__lang}>{t.lang}:  {locale}</p>
              <LocaleSwitcher />
          </div>
        </nav>
      </div>
    </>
  )
}
