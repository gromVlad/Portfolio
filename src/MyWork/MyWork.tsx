import React from "react";
import styles from "./MyWork.module.css";
import socialNetwork from "../log/socialNetwork.png";
import todolist from "../log/todolist.png";

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
          <img src={todolist} alt="Project 1" />
          <div className={styles.projectInfo}>
            <p>Todolist</p>
          </div>
          <a target="_blank" href="https://gromvlad.github.io/todoList">
            <button className={styles.button}>view</button>
          </a>
        </div>
      </div>
      <div className={styles.buttonMore}>
        <a target="_blank" href="https://github.com/gromVlad">
          <button className={styles.button}>view more</button>
        </a>
      </div>
    </section>
  );
}