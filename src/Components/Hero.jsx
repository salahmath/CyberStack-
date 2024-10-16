import Lottie from "lottie-react";
import React from "react";
import groovyWalkAnimation from "../../public/lootie/blackPc.json";
const Hero = () => {
  return (
    <section id="home" className="bg-white py-12">
      <div className="container mx-auto px-5 flex flex-col-reverse lg:flex-row items-center">
      <div className="w-full lg:w-1/2 flex flex-col space-y-4 lg:ml-36 px-6 lg:px-0">
  <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
    Empowering businesses with <br className="hidden lg:inline" /> secure digital solutions.
  </h1>
  <p className="text-gray-600 text-base lg:text-lg">
    At CyberStack, we specialize in cutting-edge web and mobile development <br className="hidden lg:inline" />
    combined with robust cybersecurity solutions. Our mission is to help you <br className="hidden lg:inline" />
    thrive in today’s evolving digital landscape with secure and scalable tools.
  </p>
  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
    <a
      href="https://www.linkedin.com/company/cyberstacktn/about/"
      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-grey-500 mr-2"
      >
        <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11.4 20h-2.6v-10h2.6v10zm-1.3-11.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm12.7 11.2h-2.6v-5.4c0-1.3-.5-2.2-1.5-2.2s-1.7 1-1.7 2.2v5.4h-2.6v-10h2.6v1.3c.5-.7 1.4-1.4 2.4-1.4 1.7 0 3 1.4 3 3.5v6.6z" />
      </svg>
      View on LinkedIn
    </a>
    <a
      href="#"
      className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-white mr-2"
      >
        <path d="M12 0L3.175 5.847v12.308L12 24l8.825-5.845V5.847L12 0zm2.896 17.367H9.098v-1.927h5.792v1.927zm.83-3.488H8.268v-1.927h7.458v1.927zm.795-3.57H7.473V8.385h9.048v1.924z" />
      </svg>
      View on Upwork
    </a>
  </div>
</div>

        <div className="lg:w-1/2 lottie">
          <Lottie animationData={groovyWalkAnimation} loop={true} />
        </div>
      </div>

     
    </section>
  );
};

export default Hero;
