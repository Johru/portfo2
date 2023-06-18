import styles from '@/styles/page.module.scss';
import Image from 'next/image';

export default function HeroMaze() {
  return (
    <div>
      <h1>Hero Maze</h1>
      <span className={`${styles['tags']} `}>
        <i>Typescript</i><i>Canvas</i><i>A* pathfinding</i><i>Modified Bresenham&apos;s algorithm</i></span>
      <div className={styles.grid}>

        <p className={styles.bold}>URL:</p>
        <a className={styles.underline}>deployedURL.com</a>

        <p className={styles.bold}>Github:</p>
        <a className={styles.underline} href='https://github.com/Johru/Hero-Maze' rel='noopener' target='_blank'>https://github.com/Johru/Hero-Maze</a>

        <p className={styles.bold}>Contribution:</p>
        <p>100% mine</p>

        <p className={styles.bold}>Completion:</p>
        <p>85% | pretty much finished, some luxury features can still be added. </p>

        <p className={styles.bold}>Description:</p>
        <p>Originally a silly little school project that grew into a fully fledged browser game. The plan was to make a browser game using canvas and no frameworks, libraries or tools, just plain typescript. This project followed me from close to no programming skills all the way to implementation of game loops and pathfinding algorithms. As a result, the code will benefit from some refactoring and testing, but the game is fully functional.
        </p>
      </div>
      <div className={styles['image-wrapper-page']}>
      <Image fill={true} src='/wanderer.png' alt='screenshot of a full game' 
      className={styles['image-dynamic']}/> 
      </div>

<h2>Game Basics</h2>
<p>The player can move a hero through a maze using the arrow keys. Moving into a moster will trigger an automatic battle but fighting too often will increase the risk of dying, so evasion is key. Monsters will follow the player around the map, allowing the player to lead them away from key locations and loop back around to claim the sweet loot.<br/>
Chests contain randomized loot, one chest of each color always contains the key to that color of doors. Player can only pass doors once the matching key is found. See the in-game instructions for more details.</p>

<h2>Modified Bresenham&apos;s algorithm</h2>

<p>Bresenham&apos;s line-drawing algorithm was designed to select which pixels should be filled when a line is drawn on screen using only whole numbers to calculate them, no crazy floats. It so happens this can be used to control line of sight on a 2D grid. An imaginary line is drawn between the center of the square containg a monster and the center of the hero&apos;s square. Any square meaningfully instersected by this line is checked for walls. If a wall is found on any of them, line of sight is considered blocked and that monster will ignore the hero. Otherwise, it will start to chase. See below the visualisation. Line turns red when player is seen, yellow marked squares are tested for walls:</p>

<div className={styles['image-wrapper-page']}>
      <Image fill={true} src='/wanderer.gif' alt='screenshot of a full game' 
      className={styles['image-dynamic']}/> 
      </div>

<h2>A-star pathfinding algorithm</h2>

<p>A* search is commonly used to search for the shortest path through a series of nodes. A simple heuristic is used to prioritize nodes closer to target, so the search will go approximately in the correct direction, until the shortest path is found, in this case the lowest possible number of steps. In the above picture, the grey path is shown whenever a monster establishes a path towards the last spotted location of the hero.<br/>
Unobstructed squares on the grid are of course considered nodes here, the guiding heuristic is a simple difference in X, Y coordinates.
</p>

<h2>Planned features</h2>
<ul>
<li>Support for mobile devices: an on-screen controller split into 4 quadrants.</li>
<li>Patrol routes, see below</li>
<li>An in-game menu containing: Scores | Instructions | Restart Game | Create custom map.</li>
<li>Interactive level editor. User can input the size of the map from 5x5 to 50x50, scroll through the map, add tiles and assets by clicking and dragging. A sidebar allows to define possible chest contents.</li>
<li>More levels, endgame boss.</li>
<li>Custom graphics, no more free placeholders.</li>

</ul>

<h3>Patrol Routes</h3>
<p>A final step in the game&apos;s development will be the patrol routes. For now, mosters move in randomly selected directions until they spot the hero. In the future, the creator of the map can select a patrol route for each monster. It will only move periodically along the path. When spotting the hero, it will follow him, but once the line of sight is broken, it will return to the last position on the patrol route and continue from there. This will turn the game into a puzzle, forcing the hero to find a way through the maze while luring the monsters away just right to access loot. Mosters will be more predictable and the fights will then be made more deadly to force a stealthy approach to solve the maze.</p>
      </div>

      )
    
    }