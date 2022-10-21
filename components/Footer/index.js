import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>
          Let&#39;s stay in touch: <a href="mailto:info@rickhekman.com">Send me an email</a> or <a href="tel:+31648700448">call me +31 648 700 448</a> 
        </p>
      </footer>
  )
};

export default Footer;
