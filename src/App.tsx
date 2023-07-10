import React from 'react';
import styles from "./App.module.css";
import Header from './Header/Navbar';
import Footer from './Footer/Footer';
import { MySkills } from './MySkills/MySkills';
import { MyWork } from './MyWork/MyWork';
import { Contact } from './Contact/Contact';
import { Home } from './Home/Home';
import { useCallback } from "react";
 import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { options } from './components/config';
import Navbar from './Header/Navbar';



function App(): JSX.Element {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className={styles.particle}
        options={options}
      />
      <div className={styles.app}>
        <Navbar />
        <Home />
        <MySkills />
        <MyWork />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;

