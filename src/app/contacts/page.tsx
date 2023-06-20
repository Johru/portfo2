import styles from '@/styles/page.module.scss';

export default function Contacts() {
  return (
    <>
      <div className={`${styles.grid} ${styles.g500}`}>
        <p>Email: </p>
        <p>johruza@gmail.com </p>
        <p>Phone:</p>
        <p>+420 799 991 186</p>
      </div>
      <div className={styles.grid}>
        <p>Address:</p>
        <p>Nad Pískovnou 1682/50</p>
        <p></p>
        <p>Praha 4</p>
        <p></p>
        <p>140 00</p>
      </div>
      <div className={styles.grid}>
        <p>Github: </p>
        <a
          className={styles.underline}
          href="https://github.com/Johru?tab=repositories"
          rel="noopener"
          target="_blank"
        >
          https://github.com/Johru?tab=repositories
        </a>
        <p>LinkedIn: </p>
        <a
          className={styles.underline}
          href="https://www.linkedin.com/in/josef-hrůza-58896813a/"
          rel="noopener"
          target="_blank"
        >
          https://www.linkedin.com/in/josef-hrůza-58896813a/
        </a>
      </div>
    </>
  );
}
