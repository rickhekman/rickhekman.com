import Layout from '../components/Layout';
import { ThemeProvider } from 'next-themes';
import 'normalize.css/normalize.css';

import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
