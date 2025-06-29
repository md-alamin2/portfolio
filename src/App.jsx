import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="relative">
      <header className="sticky top-0 z-50 backdrop-blur-md py-2 mt-0">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 lg:container mx-auto">
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Project></Project>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
