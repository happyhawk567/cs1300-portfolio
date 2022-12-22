import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css"


export default function App() {

  return (

    <div class="App">
      <div class="topnav">
   
   <a href="#about">ABOUT ME</a>
   <a href="#projects">PROJECTS</a>

 </div>
      <section id="about">
      <About/>
      </section>
      <section id="projects">
      <Projects/>
      </section>
    </div>
  );
}
