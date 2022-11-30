import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import BulbDark from '../SVG/BulbDark';
import BulbLight from '../SVG/BulbLight';

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
        <button onClick={() => setTheme('light')} className={styles.button} type="button" aria-describedby="Light bulb turn on light theme">
          <BulbLight />
        </button>
      )
    }
    return (
      <button onClick={() => setTheme('dark')} className={styles.button} type="button" aria-describedby="Dark bulb turn on dark theme">
        <BulbDark />
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

