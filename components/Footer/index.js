import { useRouter } from 'next/router';

import en from './translations/en';
import es from './translations/es';
import nl from './translations/nl';

import PhoneIcon from '../SVG/Phone';
import PhoneRingIcon from '../SVG/PhoneRing';
import MailCloseIcon from '../SVG/MailClose';
import MailOpenIcon from '../SVG/MailOpen';
import GitHubIcon from '../SVG/GitHubIcon';
import LinkedInIcon from '../SVG/LinkedInIcon';
import InstagramIcon from '../SVG/InstagramIcon';

import styles from './Footer.module.scss';

export default function Footer() {

  const router = useRouter();
  const { locale } = router;

  let t = locale;
  if (t === 'en') {
    t = en();
  } else if (t === 'es') {
    t = es();
  } else {
    t = nl();
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.contact}>
          <div className={styles.text}>
            <p>
              {t.description}:
            </p>
          </div>
          <div className={styles.footer__icons}>
            <a href="mailto:info@rickhekman.com" rel="noopener noreferrer" aria-label="Rick Hekman phone" className={styles.mail}>
              <MailCloseIcon />
              <MailOpenIcon />
            </a>
            <a href="tel:+31648700448" rel="noopener noreferrer" aria-label="Rick Hekman phone" className={styles.phone}>
              <PhoneIcon />
              <PhoneRingIcon />
            </a>
            <a href="https://github.com/rickhekman" rel="noopener noreferrer" target="_blank" aria-label="Rick Hekman on GitHub" className={styles.github}>
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/rickhekman/" rel="noopener noreferrer" target="_blank" aria-label="Rick Hekman on LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/rickhekman/" rel="noopener noreferrer" target="_blank" aria-label="Rick Hekman on Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
};
