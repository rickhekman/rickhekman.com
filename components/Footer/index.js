import useTranslation from 'next-translate/useTranslation';

import PhoneIcon from '../SVG/Phone';
import PhoneRingIcon from '../SVG/PhoneRing';
import MailCloseIcon from '../SVG/MailClose';
import MailOpenIcon from '../SVG/MailOpen';
import GitHubIcon from '../SVG/GitHubIcon';
import LinkedInIcon from '../SVG/LinkedInIcon';
import InstagramIcon from '../SVG/InstagramIcon';

import styles from './Footer.module.scss';

export default function Footer() {

  let { t } = useTranslation();

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.contact}>
          <div className={styles.text}>
            <p>
              {t('footer:description')}:
            </p>
          </div>
          <div className={styles.footer__icons}>
            <a href="mailto:info@rickhekman.com" rel="noopener noreferrer" aria-label={t('footer:email')} className={styles.mail}>
              <MailCloseIcon />
              <MailOpenIcon />
            </a>
            <a href="tel:+31648700448" rel="noopener noreferrer" aria-label={t('footer:phone')} className={styles.phone}>
              <PhoneIcon />
              <PhoneRingIcon />
            </a>
            <a href="https://github.com/rickhekman" rel="noopener noreferrer" target="_blank" aria-label={t('footer:github')} className={styles.github}>
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/rickhekman/" rel="noopener noreferrer" target="_blank" aria-label={t('footer:linkedin')}>
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/rickhekman/" rel="noopener noreferrer" target="_blank" aria-label={t('footer:insta')}>
              <InstagramIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
};
