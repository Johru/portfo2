import React from 'react';
import styles from '../styles/layout.module.scss';
import styles2 from '../styles/page.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles2.grid}>
        <p>This portfolio website:</p>
        <a className={styles2.underline} href='https://github.com/Johru/portfo2/tree/master' rel='noopener' target='_blank'>https://github.com/Johru/portfo2/tree/master</a>
      </div>
    </div>
  );
};
