import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

import useTranslation from 'next-translate/useTranslation';

export default function Layout({ children }) {

  const { t } = useTranslation('head');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
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
