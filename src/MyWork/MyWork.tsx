import React from "react";
import styles from "./MyWork.module.css";
import socialNetwork from "../log/socialNetwork.png";

export function MyWork(): JSX.Element {
  return (
    <section className={styles.workSection}>
      <h2>My Work</h2>
      <div className={styles.portfolioWorks}>
        <div className={styles.project}>
          <img src={socialNetwork} alt="Project 1" />
          <div className={styles.projectInfo}>
            <p>Social network</p>
          </div>
          <a target="_blank" href="https://gromvlad.github.io/samurai_way_main">
            <button className={styles.button}>view</button>
          </a>
        </div>

        <div className={styles.project}>
          <img src={socialNetwork} alt="Project 1" />
          <div className={styles.projectInfo}>
            <p>Social network</p>
          </div>
          <a target="_blank" href="https://gromvlad.github.io/samurai_way_main">
            <button className={styles.button}>view</button>
          </a>
        </div>

        <div>
          <a target="_blank" href="https://gromvlad.github.io/samurai_way_main">
            <button className={styles.button}>view more</button>
          </a>
        </div>
      </div>
    </section>
  );
}