import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div className="w-11/12 lg:container mx-auto relative">
      <header className="sticky top-0 z-50">
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Project></Project>
        <Contact></Contact>
      </main>
    </div>
  );
};

export default App;
