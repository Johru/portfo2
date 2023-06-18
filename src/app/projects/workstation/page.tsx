import styles from '@/styles/page.module.scss';
import Image from 'next/image';

export default function Workstation() {
  return (
    <div>
      <h1>Workstation Booking Platform</h1>
      <span className={`${styles['tags']} `}>
        <i>Angular</i><i>NodeJS / Express</i><i>TypeORM</i><i>mySQL</i><i>Typescript</i><i>Bcrypt</i><i>0Auth</i><i>JWT </i></span>
      <div className={styles.grid}>

        <p className={styles.bold}>URL:</p>
       <p> not deployed :-&#40; , but you can see the original presentation video below.
       </p>

        <p className={styles.bold}>Github:</p>
        <a className={styles.underline} href='/' rel='noopener' target='_blank'>https://github.com/Johru/??????</a>

        <p className={styles.bold}>Contribution:</p>
        <p>20% 	&#40; Made by 5 student developers under the supervision of a mentor.	&#41; My contribution was mostly backend, specifically the Reservation, Building, User dashboard and Admin user management endpoints. I setup reusable data validation for the backend. I also helped connect backend and frontend and did some frontend refactoring to adjust how data flowed through the component tree.</p>

        <p className={styles.bold}>Completion:</p>
        <p>100% | All features were completed on time, except for deployment. Notably, some features a user might expect were never planned. For example, past date reservations are not filtered out and will show up in user profile until deleted manually.</p>

        <p className={styles.bold}>Description:</p>
        <p>This was our final fullstack team project in Green Fox Academy. Though never deployed due to time constraints and set to private by Greenfox on Github, it was my first experience coordinating frontend and backend work in a team, managing multiple branches in Git and getting pull requests past code review.
        </p>
      </div>
      <div className={styles['image-wrapper-page']}>
      <video width="100%" height="auto" controls>
  <source src="/drudgehouse.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>
      </div>

      <h2>Features</h2>
      <p>The app aims to provide a platform for users to reserve their seats in advance in various buildings and offices. If a user has admin status, they will see an additional admin dashboard and will be authorized to make changes.</p>

      <h4>A user can:</h4>
      <ul>
        <li>Create an account and log in.</li>
        <li>Browse buildings, floors and departments.</li>
        <li>See exising reservations for a selected date, including who made them.</li>
        <li>Make new reservations on available seats.</li>
        <li>View a list of their existing reaservations in their profile and delete some of them.</li>
      </ul>

      <h4>Additionally, admins can:</h4>
      <ul>
        <li>See a list of users and promote, demote or delete them</li>
        <li>See a list of Buildings, Floors and Departments, as well as the number of Seats for each.</li>
        <li>Perform CRUD operations on Buildings, Floors, Departments. Seats can be only defined when a Department is created.</li>
      </ul>

      <p><em>Note: I refer to departments as <q>Departments</q>, but the app incorrectly called them <q>Workstations</q>, which conventionally would mean an individual seat instead of a section of a floor.</em> </p>

      <div className={styles['image-wrapper-page']}>
      <Image fill={true} src='/about-drudgehouse.png' alt='the Drudgehouse team and description' 
      className={styles['image-dynamic']}/> 
      </div>
      <div className={styles['image-wrapper-page']}>
      <Image fill={true} src='/DB.png' alt='the Drudgehouse team and description' 
      className={styles['image-dynamic']}/> 
      </div>
      <div className={styles['image-wrapper-page']}>
      <Image fill={true} src='/request-flow.png' alt='the Drudgehouse team and description' 
      className={styles['image-dynamic']}/> 
      </div>
    </div>
        )
}