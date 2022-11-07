import Layout from '../components/Layout';
import { ThemeProvider } from 'next-themes'

import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  )
}
