import useTranslation from 'next-translate/useTranslation';

import LayoutTop from '../Layout-top';

import styles from './Title.module.scss'


export default function Avatar() {

  let { t } = useTranslation();

  return (
    <LayoutTop>
      <h1 className={styles.title}>
        Rick Hekman
      </h1>
      <p className={styles.description}>{t('title:subtitle')}</p>
    </LayoutTop>
  )
}
