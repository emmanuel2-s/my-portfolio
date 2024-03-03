import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function RouterPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default RouterPage;
