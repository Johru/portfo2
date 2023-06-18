import styles from '@/styles/page.module.scss';
import Image from 'next/image';

export default function Woodland() {
  return (
    <div>
      <h1>Woodland AI project</h1>
      <span className={`${styles['tags']} `}>
        <i>React</i><i>NextJS App Router</i><i>NextJS server actions</i><i>Typescript</i><i>Tabidoo API</i></span>
      <div className={styles.grid}>

        <p className={styles.bold}>URL:</p>
        <a className={styles.underline}>deployedURL.com</a>

        <p className={styles.bold}>Github:</p>
        <a className={styles.underline} href='https://github.com/Johru/Woodland-AI' rel='noopener' target='_blank'>https://github.com/Johru/Woodland-AI</a>

        <p className={styles.bold}>Contribution:</p>
        <p>100% mine</p>

        <p className={styles.bold}>Completion:</p>
        <p>3% | Currently reworking the structure see below the Roadmap</p>

        <p className={styles.bold}>Description:</p>
        <p>While the original purpose of the project is to familiarize myself with the native state management in React, the project itself aims to create a virtual environment to test bots for the board game Root. Focus is on functionality, rather than beautiful UI or flashy effects.
        </p>
      </div>
      <div className={styles['image-wrapper-page']}>
      <Image fill={true} src='/woodland.png' alt='screenshot of a green UI with a game map' 
      className={styles['image-dynamic']}/> 
      </div>

<h2>Roadmap</h2>

<p>The application itself is an AI project for a board game. AI here means a set of fixed logic in a weighted decision tree, no deep learning involved. Click <a className={styles.underline}>here</a> to read more about the planned AI design. <br/>Users will be able to create AI opponents to play against from pre-determined list of possible settings. A list of a user&apos;s created bots can be viewed in their profile. Later, users will be able to play a game in a simplified UI. Game rules will be enforced, players can play solo or against any bots they created. After each game, basic statisics will be stored in the database, the user will have the option to download a log file containg detailed data about each turn of the game. All users will have access to the aggregated global statistics.</p>

<h3>Planned initial features</h3>
<ul>
  <li>Layouts, Sidebars: The correct Sidebar can be selected for each page separately, changed, and some Sidebars can be filled with a list of other components depending on the state.</li>
  <li>Only basic game board, no rules, no logic. Extremely limited functions can be controlled from a few example Sidebar components.</li>
  <li>Users can select </li>
  <li>Placeholder AI creation form stores created fake bots in a database.</li>
  <li>The list of AI&apos;s for a hardcoded user can be retrieved from the database, viewed, sorted, filtered, and deleted.</li>
</ul>

<h3>Planned advanced content</h3>
<ul>
  <li>Functions enforcing game actions like movement or combat are created.</li>
  <li>A game can be set up, the board is populated with game pieces of a single faction.</li>
  <li>All possible actions for this faction can be controlled by the user from the Sidebar, which is now connected to game logic and follows the turn structure.</li>
  <li>Victory conditions are checked after every user action, the game ends as soon as the condition is met, the player is ejected with a static message.</li>
  <li>The AI faction can play the game, but will always have the same hardcoded setup and turns.</li>
  <li>The deck of cards only contains card colors which factions need to interact with, no card effects.</li>
</ul>

<h3>Planned expert content</h3>
<ul>
  <li>A single AI faction has fully defined logic for all tactical states.</li>
  <li>The first default bot for this faction is created, users can create new ones and select them during game setup.</li>
  <li>Bots now play the game independently, following a weighted decision tree.</li>
  <li>The deck now has all card effects and full advanced game setup is enabled.</li>
</ul>

<h3>Possible full scope of the app</h3>
<ul>
  <li>All factions have a default bot and presets enabling bot creation by users.</li>
  <li>New maps can be defined and selected during game setup.</li>
  <li>Game stats are stored in a database, aggregates can be accessed by users.</li>
  <li>Users can download a log file and <q>replay</q> a game from a log file.</li>
  <li>Bots can now play against only other bots a set number of times up to a 1000. Aggregated session stats are then stored for the user.</li>
  <li>Landmarks are implemented.</li>
  <li>User authentication and authorization is added, new users can now actually create their accounts.</li>
  <li>Optionally, if given permission by Leder Games, the whole project will be published and made available to the public. Otherwise, select few friends will be given access.</li>
</ul>

    </div>
  );
}