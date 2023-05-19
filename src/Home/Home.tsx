import React from "react";
import styles from "./Home.module.css";
import maska_anime from "../log/maska_anime.jpg";

export function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.text}>
        <h1>Welcome to my portfolio website!</h1>
        <p>Here you can find information about me and my work.</p>
      </div>
      <div className={styles.photo}>
        <img src={maska_anime} alt="Maska Anime" />
      </div>
    </main>
  );
}
