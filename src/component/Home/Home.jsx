import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import "./Home.css";

function Home() {
  const [border, setBorder] = useState("home");
  const [currentProposalIndex, setCurrentProposalIndex] = useState(0);

  // Array of proposals
  const proposals = [
    {
      image: "/bg.jpg", // Replace with your web development image
      text: "Web Development: Build stunning websites that engage users.",
    },
    {
      image: "/bg2.jpg", // Replace with your mobile development image
      text: "Mobile Development: Create mobile apps that connect people.",
    },
    {
      image: "https://altatecnologia.tech/wp-content/uploads/2022/06/it-software-solutions-1200x1200-1.jpg", // Replace with your cybersecurity image
      text: "Cybersecurity: Protect systems and data from threats.",
    },
  ];

  const changeContent = () => {
    setCurrentProposalIndex((prevIndex) => (prevIndex + 1) % proposals.length);
  };
  useEffect(() => {
    console.log(border); // This will log the updated value whenever it changes
  }, [border]);
  return (
    <div  className="header">
         <motion.img
        className="bg"
        src={proposals[currentProposalIndex].image}
        alt="background"
        key={currentProposalIndex} // Key to trigger reanimation
        initial={{ opacity: 0 }} // Starting state for the image
        animate={{ opacity: 1 }} // End state for the image
        exit={{ opacity: 0 }} // Exit state for the image
        transition={{ duration: 0.5 }} // Duration of the transition
      />
      <div className="flex navbar">
        <img className="logo" src="/logo1.png" alt="logo" />

        <ul className="flex">
          <li>
            <a
              href="/"
              onClick={() => setBorder("home")}
              className={border === "home" ? "border" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              onClick={() => setBorder("About")}
              className={border === "About" ? "border" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              onClick={() => setBorder("Services")}
              className={border === "Services" ? "border" : ""}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              onClick={() => setBorder("Contact")}
              className={border === "Contact" ? "border" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="title">
        <motion.div
          key={currentProposalIndex} // Use key for identifying the component
          initial={{ opacity: 0, y: -20 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animate to this state
          exit={{ opacity: 0, y: 20 }} // Exit state
          transition={{ duration: 0.5 }} // Transition duration
        >
          <h1>
            {proposals[currentProposalIndex].text}
          </h1>
        </motion.div>
      </div>
      <button className="change-button" onClick={changeContent}>
        <MdNavigateNext/>
      </button>
    </div>
  );
}

export default Home;
