
import React, { useState } from "react";
import styles from "./Header.module.css";

function Header(): JSX.Element {
  

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>My Portfolio</div>
        <nav className={`${styles.nav} `}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
