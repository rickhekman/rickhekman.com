import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import MoonIcon from '../SVG/Moon';
import MoonFillIcon from '../SVG/MoonFill';
import SunIcon from '../SVG/Sun';
import SunFillIcon from '../SVG/SunFill';

import styles from './ThemeSwitch.module.scss';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

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
        <button onClick={() => setTheme('light')} className={`${styles.button} ${styles.moon}`} type="button" aria-describedby="Turn on light mode">
          <MoonIcon />
          <MoonFillIcon />
        </button>
      )
    }
    return (
      <button onClick={() => setTheme('dark')} className={`${styles.button} ${styles.sun}`} type="button" aria-describedby="Turn on dark mode">
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

