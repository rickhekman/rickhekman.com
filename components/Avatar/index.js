
// import Image from 'next/image';

import styles from './Avatar.module.scss'

export default function Avatar() {
  return (
     <>
      <h1 className={styles.title}>
        Rick Hekman
      </h1>
      <p className={styles.description}>Creative Developer</p>
      <div className={styles.avatar}>
        {/* <Image
          alt='Rick Hekman avatar'
          src='/images/rickhekman.webp'
          width={400}
          height={600}
        /> */}
      </div>
     </>
  )
}
