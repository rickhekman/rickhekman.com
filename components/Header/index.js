import { useState } from 'react';

import SideDrawer from './SideDrawer';
import ToggleButton from './SideDrawer/ToggleButton';
import Backdrop from '../Backdrop';
import ThemeSwitch from '../ThemeSwitch';

import styles from './Header.module.scss';

export default function Header() {

  const [SideDrawerOpen, setSideDrawerOpen] = useState(false);

  const openHandler = () => {
    if (!SideDrawerOpen) {
      setSideDrawerOpen(true);

    } else {
      setSideDrawerOpen(false);
    }
  };

  const closeHandler = () => {
    setSideDrawerOpen(false);
  }

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  }

  let backdrop;

  if (SideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  return (
    <>
      <header className={styles.header}>
        <div className={SideDrawerOpen ? `${styles.open}` : ``}>
          <ToggleButton click={openHandler}/>
          <SideDrawer show={SideDrawerOpen} click={closeHandler}/>
          {backdrop}
        </div>
        <div className={styles.theme}>
          <ThemeSwitch/>
        </div>
      </header>
    </>
  )
}
