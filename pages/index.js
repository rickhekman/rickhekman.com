import Head from 'next/head';

import Metadata from '../components/Metadata';
import Title from '../components/Title';

export default function Home() {
  return (
    <>
      <Head>
        <Metadata />
      </Head>
      <Title />
    </>
  )
}
