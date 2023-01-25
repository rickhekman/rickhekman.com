import useTranslation from 'next-translate/useTranslation';

import LayoutCenter from '../Layout-center';

import styles from './Title.module.scss'


export default function Avatar() {

  let { t } = useTranslation();

  return (
    <LayoutCenter>
      <h1 className={styles.title}>
        Rick Hekman
      </h1>
      <p className={styles.description}>{t('title:subtitle')}</p>
    </LayoutCenter>
  )
}
