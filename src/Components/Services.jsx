import React from "react";
import { FaCode, FaMobileAlt, FaShieldAlt } from "react-icons/fa"; // Import icons

function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "We create modern, responsive, and fully functional websites using cutting-edge technologies like React, Node.js, and more.",
      icon: <FaCode className="h-12 w-12 text-purple-600" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Build scalable and user-friendly mobile applications for both Android and iOS with our expert team.",
      icon: <FaMobileAlt className="h-12 w-12 text-purple-600" />,
    },
    {
      title: "Cybersecurity",
      description:
        "Protect your digital assets with our comprehensive cybersecurity solutions including penetration testing, vulnerability assessments, and more.",
      icon: <FaShieldAlt className="h-12 w-12 text-purple-600" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600">
            Explore the wide range of IT services we offer to help your business
            thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 hover:scale-105"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
