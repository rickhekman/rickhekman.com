import { NextSeo } from "next-seo";
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

import useTranslation from 'next-translate/useTranslation';

export default function Layout({ children }) {

  const { t } = useTranslation('head');
  const title = t('seotitle');
  const description = t('seodescription');
  const imageUrl = t('seoimageurl');
  const alt = t('seoalt');

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: 'website',
          url: 'https://www.rickhekman.com/',
          title: title,
          description: description,
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: alt,
              type: 'image/webp',
            }
          ]
        }}
      />
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
