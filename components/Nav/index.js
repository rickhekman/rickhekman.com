import Link from 'next/link';
import ThemeSwitch from '../ThemeSwitch';

import styles from './Nav.module.scss';

export default function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/visual-diary">Visual diary</Link>
          </li>
        </ul>
        <ThemeSwitch/>
      </nav>
    </>
  )
}
