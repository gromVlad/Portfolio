import React from "react";
import styles from "./MyWork.module.css";

export function MyWork(): JSX.Element {
  return (
    <section className={styles.workSection}>
      <h2>My Work</h2>
      <div className={styles.portfolioWorks}>
        <a href="#" className={styles.project}>
          <img src="" alt="Project 1" />
          <div className={styles.projectInfo}>
            <p>Project 1</p>
          </div>
        </a>
        <a href="#" className={styles.project}>
          <img src="" alt="Project 2" />
          <div className={styles.projectInfo}>
            <p>Project 2</p>
          </div>
        </a>
        <a href="#" className={styles.project}>
          <img src="" alt="Project 3" />
          <div className={styles.projectInfo}>
            <p>Project 3</p>
          </div>
        </a>
        <a href="#" className={styles.project}>
          <img src="" alt="Project 4" />
          <div className={styles.projectInfo}>
            <p>Project 4</p>
          </div>
        </a>
        <a href="#" className={styles.project}>
          <img src="" alt="Project 4" />
          <div className={styles.projectInfo}>
            <p>Project 4</p>
          </div>
        </a>
        <a href="#" className={styles.project}>
          <img src="" alt="Project 4" />
          <div className={styles.projectInfo}>
            <p>Project 4</p>
          </div>
        </a>
      </div>
    </section>
  );
}