import React from 'react';
import styles from "./App.module.css";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { MySkills } from './MySkills/MySkills';
import { MyWork } from './MyWork/MyWork';
import { Contact } from './Contact/Contact';
import { Home } from './Home/Home';

function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
      <MySkills />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

