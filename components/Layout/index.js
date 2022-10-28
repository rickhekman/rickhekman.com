import Head from 'next/head';
import Footer from '../Footer';

import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <Head>
      <title>Rick Hekman, Creative Developer</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>    
          {children}
        </main>
        <Footer />
      </div>      
    </>
  )
}
