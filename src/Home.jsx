import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
