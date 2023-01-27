import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import LocaleSwitcher from '../../LocaleSwitcher';

import styles from './SideDrawer.module.scss';


export default function SideDrawer(props) {
  const router = useRouter();
  const { locale } = router;

  let { t } = useTranslation();

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
            <li onClick={props.click} >
              <Link href="/" tabIndex={tabindex}>Home</Link>
            </li>
            <li onClick={props.click}>
              <Link href="/projects" tabIndex={tabindex}>{t("menu:projects")}</Link>
            </li>
            <li className={styles.locale}>
              <p className={styles.locale__lang}>{t("menu:lang")}:  {locale}</p>
              <LocaleSwitcher />
            </li>
          </ul>

        </nav>
      </div>
    </>
  )
}
