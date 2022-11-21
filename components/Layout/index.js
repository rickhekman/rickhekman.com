import Metadata from '../Metadata';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <Metadata />
      <Head>
        <title>Rick Hekman, Creative Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
