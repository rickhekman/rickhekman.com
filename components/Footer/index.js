import InstagramIcon from '../SVG/InstagramIcon';
import LinkedInIcon from '../SVG/LinkedInIcon';
import GitHubIcon from '../SVG/GitHubIcon';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <p>
            Let&#39;s stay in touch: <a href="mailto:info@rickhekman.com">Send me an email</a> or <a href="tel:+31648700448">call me at +31 648 700 448</a> 
          </p>
        </div>
        <nav className={styles.footer__icons}>
          <a href="https://github.com/rickhekman" rel="noopener noreferrer" target="_blank" aria-label="Rick Hekman on GitHub" className="github">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/rickhekman/" rel="noopener noreferrer" target="_blank" aria-label="Rick Hekman on LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/rickhekman/" rel="noopener noreferrer" target="_blank" aria-label="Rick Hekman on Instagram">
            <InstagramIcon />
          </a>
        </nav>
      </footer>
    </>
  )
};
