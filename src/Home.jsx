import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Lottie from "lottie-react";
import loadingAnimation from "../public/lootie/1.json"; // Remplacez par le chemin vers votre fichier Lottie

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Changer l'état de chargement après 1000 ms
      setIsVisible(true); // Rendre le contenu visible après le chargement
    }, 2000); // Délai de 1000 ms

    return () => clearTimeout(timer); // Nettoyer le timer si le composant est démonté
  }, []);

  return (
    <div>
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Lottie animationData={loadingAnimation} loop={true} />
        </div>
      ) : (
        <div className={`fade-in ${isVisible ? 'fade-in' : ''}`}>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Team />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
