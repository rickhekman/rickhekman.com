import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Rick Hekman, Creative Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
