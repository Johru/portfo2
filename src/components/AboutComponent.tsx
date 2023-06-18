import Link from 'next/link';
import styles from '../styles/page.module.scss';

export function AboutComponent() {
  return (
    <div>
      <h1>Josef Hrůza</h1>
      <h3>Junior Fullstack Developer</h3>
    <div className={styles['tags']}>
      <i>Typescript</i>
      <i>Javascript</i>
      <i>Angular</i>
      <i>React</i>
      <i>NextJS</i>
      <i>NodeJS</i>
      <i>Express</i>
      <i>TypeORM</i>
      <i>0Auth</i>
      <i>Bcrypt</i>
      <i>JWT</i>
      </div>
      <p className={styles['ft-large']}>
    Looking for a web developer?
    Don&apos;t hesitate to <Link href='/contacts' className={styles.underline}>contact</Link> me!
      </p>

      <p className={styles['ft-large']}>
    I am junior fullstack developer based in Prague, Czech Republic, but willing to relocate. You can see some of my projects below, or have a look at my  <Link href='/story' className={styles.underline}>story</Link>
    &nbsp;to read about what made me change my career and how that informs my mindset.      </p>
    

    <br/>
    <br/>
    </div>
  );
}
