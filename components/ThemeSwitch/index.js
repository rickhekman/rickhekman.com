import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

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
        <button onClick={() => setTheme('light')}>
          Turn on light
        </button>
      )
    }
    return (
      <button onClick={() => setTheme('dark')}>
        Turn off light
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

