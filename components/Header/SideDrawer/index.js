import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
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

  const [isActive, setIsActive] = useState(false);

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
            <li className={styles.item}>
              <button type="button"
                aria-label={t("menu:open-photo-submenu-aria")}
                className={styles.button}
                onClick={() => setIsActive(!isActive)}>
                  {t("menu:photography")} {isActive ? '-' : '+'}
                </button>
                  {isActive && <ul className={styles.submenu}>
                      <li className={styles.subitem} onClick={props.click}>
                        <Link href="/visual-diary" tabIndex={tabindex}>{t("menu:visual")}</Link>
                      </li>
                    </ul>
                  }
            </li>
          </ul>
          <div className={styles.locale}>
            <p className={styles.locale__lang}>{t("menu:lang")}:  {locale}</p>
              <LocaleSwitcher />
          </div>
        </nav>
      </div>
    </>
  )
}
