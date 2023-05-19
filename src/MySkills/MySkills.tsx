import React from "react";
import styles from "./MySkills.module.css";

export function MySkills() {
  return (
    <section className={styles.skillsSection}>
      <h2>My Skills</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skill}>
          <img src='' alt="HTML icon" />
          <p>HTML</p>
        </div>
        <div className={styles.skill}>
          <img src='' alt="CSS icon" />
          <p>CSS</p>
        </div>
        <div className={styles.skill}>
          <img src='' alt="JavaScript icon" />
          <p>JavaScript</p>
        </div>
        <div className={styles.skill}>
          <img src='' alt="React icon" />
          <p>React</p>
        </div>
        <div className={styles.skill}>
          <img src='' alt="Node.js icon" />
          <p>Node.js</p>
        </div>
        {/* More skills */}
      </div>
    </section>
  );
}

