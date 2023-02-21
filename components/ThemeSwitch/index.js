import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import useTranslation from 'next-translate/useTranslation';

import MoonIcon from '../SVG/Moon';
import MoonFillIcon from '../SVG/MoonFill';
import SunIcon from '../SVG/Sun';
import SunFillIcon from '../SVG/SunFill';

import styles from './ThemeSwitch.module.scss';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  let { t } = useTranslation();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const themeToggle = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <button onClick={() => setTheme('light')} id="lightmode" className={`${styles.button} ${styles.moon}`} type="button" aria-label={t('menu:lightmode')}>
          <MoonIcon />
          <MoonFillIcon />
        </button>
      )
    }
    return (
      <button onClick={() => setTheme('dark')} id="darkmode" className={`${styles.button} ${styles.sun}`} type="button" aria-label={t('menu:darkmode')}>
        <SunIcon />
        <SunFillIcon />
      </button>
    )
  }

  return (
    <>
      <div className={styles.switch}>
         {themeToggle()}
      </div>
    </>
  )
};

