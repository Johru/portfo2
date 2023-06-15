import React from 'react';
import styles from '../styles/layout.module.scss';

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h3>Contact me</h3>
      <p>I am currently open to work, don't hesitate to contact me.</p>

      <p></p>
      <p>johruza@gmail.com</p>
      <p>+420 799 991 186</p>
      <h3>CV</h3>
      <p>You can download my CVs here:</p>
      <button>Donwload English CV</button>
      <button>Donwload Czech CV</button>
      <button>Donwload German CV</button>
    </div>
  );
};
