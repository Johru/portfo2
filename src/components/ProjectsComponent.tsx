import Link from 'next/link';
import styles from '../styles/page.module.scss';
import Image from 'next/image';

export function ProjectsComponent() {
  return (
  <div>
      <h1>Projects</h1>

    <div className={styles['project-box']}>
     <> <Link href='/projects/workstation' className={styles['underline']}><h3>Workstation Booking</h3></Link></>
     <> <Link href='/projects/woodland' className={styles['underline']}><h3>Woodland AI</h3></Link></>
     <>  <Link href='/projects/heromaze' className={styles['underline']}><h3>Hero Maze</h3></Link></>

      <span className={`${styles['tags']} ${styles['mintags']}`}><i>Angular</i><i>NodeJS</i><i>TypeORM</i></span>
      <span className={`${styles['tags']} ${styles['mintags']}`}><i>React</i><i>NextJS</i></span>
      <span className={`${styles['tags']} ${styles['mintags']}`}><i>Typescript</i><i>A*</i><i>Bresenham&apos;s algo</i></span>

      <p>A platform for employees to book specific seats in various offices for the upcoming month.</p>
      <p>Custom web interface for testing bots in the board game Root: A Game of Woodland Might and Right.</p>
      <p>A maze crawler game featuring a brave hero, loot, monsters and combat. Two algorithms for line of sight and pathfinding make sure monsters can follow the hero if they see him.</p>

      <Link href='/projects/workstation'>
        <div className={styles['image-wrapper']} style={{backgroundImage: `url('/drudgehouse.png')`}}>
        </div>
      </Link>
      <Link href='/projects/woodland'>
        <div className={styles['image-wrapper']} style={{backgroundImage: `url('/woodland.png')`}}> 
        </div>
      </Link>
      <Link href='/projects/heromaze'> 
        <div className={styles['image-wrapper']} style={{backgroundImage: `url('/wanderer.png')`}}>
        </div>
      </Link>
     
    </div>

  </div>


      
   
  );
}
