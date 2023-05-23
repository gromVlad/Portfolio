import React from "react";
import styles from "./MySkills.module.css";
import html from "../log/html.svg";
import css from "../log/css.svg";
import javascript from "../log/javascript.svg";
import typescript from "../log/typescript.svg";
import storyBook from "../log/storyBook.svg";
import GraphQL from "../log/GraphQL.svg.png";
import redux from "../log/redux.svg";
import react from "../log/react.svg";
import formik from "../log/formik.png";
import test from "../log/test.png";
import reduxSaga from "../log/reduxSaga.svg";
import apollo from "../log/apollo.png";
import reactQuery from "../log/reactQuery.png";
import Websocket from "../log/Websocket.svg";




export function MySkills() {


  return (
    <section className={styles.skillsSection} id="about">
      <h2>My Skills</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skill}>
          <img src={html} alt="HTML icon" />
          <p>HTML</p>
        </div>
        <div className={styles.skill}>
          <img src={css} alt="CSS icon" />
          <p>CSS</p>
        </div>
        <div className={styles.skill}>
          <img src={javascript} alt="JavaScript icon" />
          <p>JavaScript</p>
        </div>
        <div className={styles.skill}>
          <img src={react} alt="React icon" />
          <p>React</p>
        </div>
        <div className={styles.skill}>
          <img src={typescript} alt="TypeScript" />
          <p>TypeScript</p>
        </div>
        <div className={styles.skill}>
          <img src={storyBook} alt="Story book" />
          <p>Story book</p>
        </div>
        <div className={styles.skill}>
          <img src={GraphQL} alt="GraphQL" />
          <p>GraphQL</p>
        </div>
        <div className={styles.skill}>
          <img src={redux} alt="Redux-Toolkit" />
          <p>Redux-Toolkit</p>
        </div>
        <div className={styles.skill}>
          <img src={formik} alt="Formik" />
          <p>Formik</p>
        </div>
        <div className={styles.skill}>
          <img src={test} alt="Unit tests" />
          <p>Unit tests</p>
        </div>
        <div className={styles.skill}>
          <img src={reduxSaga} alt="Redux-Saga" />
          <p>Redux-Saga</p>
        </div>
        <div className={styles.skill}>
          <img src={apollo} alt="Apollo" />
          <p>Apollo</p>
        </div>
        <div className={styles.skill}>
          <img src={react} alt="React Native" />
          <p>React Native</p>
        </div>
        <div className={styles.skill}>
          <img src={reactQuery} alt="React-Query" />
          <p>React-Query</p>
        </div>
        <div className={styles.skill}>
          <img src={Websocket} alt="WebSocket" />
          <p>WebSocket</p>
        </div>
        {/* More skills */}
      </div>
    </section>
  );
}

