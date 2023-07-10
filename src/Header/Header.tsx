import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll";

function Header(): JSX.Element {
  

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>My Portfolio</div>
        <nav className={`${styles.nav} `}>
          <ul>
            <li>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
