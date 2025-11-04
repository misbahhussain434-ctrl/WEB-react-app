import React from "react";
import Navbar from "./my_component/Navbar.jsx";
import Hero from "./my_component/pages/Hero.jsx";
import About from "./my_component/pages/About.jsx";
import Contact from "./my_component/pages/Contact.jsx";

import Experience from "./my_component/pages/Experience.jsx";
import Skills from "./my_component/pages/Skills.jsx";
import './index.css';

 function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Experience />
      <Skills />
    </>
  );
}
export default App;