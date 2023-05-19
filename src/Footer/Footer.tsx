import React from "react";
import styles from "./Footer.module.css";

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <p>© 2023 My Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
