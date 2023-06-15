import Link from 'next/link';
import React from 'react';
import styles from '../styles/layout.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles['nav-items']}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/story">My Story</Link>
        <Link href="/about">About me</Link>
      </div>
      <form action="" className={styles['locale']}>
        <label htmlFor="locale">Language: </label>
        <select name="locale" id="locale">
          <option value="en">EN</option>
          <option value="cz" disabled>
            CZ
          </option>
          <option value="de" disabled>
            DE
          </option>
        </select>
      </form>
    </div>
  );
};
