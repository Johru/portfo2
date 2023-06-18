import styles from '@/styles/page.module.scss';

export default function Woodland() {
  return (
    <div>
      <h1>Woodland AI project</h1>
      <div className={styles.grid}>
        <p className={styles.bold}>URL:</p>
        <a className={styles.underline}>URL.com</a>

        <p className={styles.bold}>Contribution:</p>
        <p>100% mine</p>

        <p className={styles.bold}>Description:</p>
        <p>While the original purpose of the project is to familiarize myself with the native state management in React, the project itself aims to create a virtual environment to test bots for the board game Root. Focus is on functionality, rather than beautiful UI or flashy effects.
          <p>asddfsdadsa</p>
        </p>

      </div>
    </div>
  );
}