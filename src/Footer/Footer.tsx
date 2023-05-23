import React from "react";
import styles from "./Footer.module.css";
import github from "../log/github.png";
import linken from "../log/linken.png";


function Footer(): JSX.Element {
  return (
    <div className={styles.div}>
      <footer className={styles.footer}>
        <div className={styles.skill}>
          <a target="_blank"  href="https://github.com">
            <img src={github} alt="github icon" />
          </a>
        </div>
        <div className={styles.skill}>
          <a target="_blank" href="https://www.linkedin.com/">
            <img src={linken} alt="linken icon" />
          </a>
        </div>
      </footer>
      <div className={styles.text}>
        <p>© 2023 My Portfolio. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
