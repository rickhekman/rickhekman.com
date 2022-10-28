import Footer from '../Footer';
import styles from './Layout.module.scss';

export default function  Layout({ children }) {
  return (
    <main>    
      {children}
      <Footer />
    </main>
  )
}
