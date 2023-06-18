'use client'
import Link from 'next/link';
import React, { useRef } from 'react';
import styles from '../styles/layout.module.scss';

export const Navbar = () => {

  const dialog = useRef<HTMLDialogElement|null>(null)

function openModal (){
 dialog.current?.showModal();
}

function closeModal (){
  dialog.current?.close();

}
  return (
    <div className={styles.navbar}>

      <div className={styles['nav-items']}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/story">My Story</Link>
        <Link href="/contacts">Contacts</Link>
        <Link onClick={openModal} href='/'>CV</Link>
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

      <dialog ref={dialog} className={styles['nav-dialog']}>
        Select version:
<br />
          <a href='/Josef_Hruza_en.pdf' download><button>Download English CV</button></a><br />
      <a href='/Josef_Hruza_de.pdf' download><button>Download German CV</button></a><br />
      <a href='/Josef_Hruza_cs.pdf' download><button>Download Czech CV</button></a><br /><br />
        <button onClick={closeModal}>CLOSE</button>
      </dialog>
    </div>
  );
};
