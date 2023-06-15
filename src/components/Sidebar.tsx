"use client";

import React, { useRef } from 'react';
import styles from '../styles/layout.module.scss';

export const Sidebar = () => {
const dialog = useRef<HTMLDialogElement|null>(null)

function openModal (){
 dialog.current?.showModal();
}

function closeModal (){
  dialog.current?.close();
}

  return (
    <div className={styles.sidebar}>
      <h3>Contact me</h3>
      <p>I am currently open to work, don`&apos;t hesitate to contact me.</p>

      <p></p>
      <p>johruza@gmail.com</p>
      <p>+420 799 991 186</p>
      <h3>CV</h3>
      <p>You can download my CVs here:</p>

      <button onClick={openModal}>Download CV</button>
      <dialog ref={dialog}>
        This is a dialog.

          <a href='/Josef_Hruza_en.pdf' download><button>Download English CV</button></a>
      <a href='/Josef_Hruza_de.pdf' download><button>Download German CV</button></a>
      <a href='/Josef_Hruza_cs.pdf' download><button>Download Czech CV</button></a>
        <button onClick={closeModal}>Close Dialog</button>
      </dialog>
    
     
    </div>
  );
};
