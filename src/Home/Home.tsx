import React from "react";
import styles from "./Home.module.css";
import profile from "../log/profile.jpg";

export function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.text}>
        <h1 className={styles.h1}>Welcome to my portfolio website!</h1>
        <p className={styles.p}>
          Here you can find information about me and my work.
        </p>
      </div>
      <div className={styles.photo}>
        <img src={profile} alt="profile" />
      </div>
    </main>
  );
}
