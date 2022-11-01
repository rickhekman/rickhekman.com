import Link from 'next/link';

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
            <Link href="/instagram">Instagram</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
