import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false); // État pour gérer le chargement

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
  
    // Créer l'URL mailto
    const mailtoLink = `mailto:contact.cyberstack@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      message
    )}%0D%0A%0D%0ASent by: ${encodeURIComponent(email)}`;
  
    setIsLoading(true); // Démarrer le chargement
    
  
    // Attendre 1000 ms avant de naviguer vers le mailto
    setTimeout(() => {
      window.location.href = mailtoLink;
  
      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsLoading(false); // Terminer le chargement
    }, 1000); // Délai de 1000 ms
  };
  

  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 lg:px-20">
      <div  className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600"             data-aos="fade-up"
            data-aos-delay="100">
            We would love to hear from you! Whether you have a question, want to
            work together, or just say hello.
          </p>
          <div             data-aos="fade-up"
            data-aos-delay="200" className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <a
                href="mailto:contact.cyberstack@gmail.com"
                className="text-purple-600 hover:underline"
              >
                contact.cyberstack@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                Habib Borguiba Street, Ben Arous, Tunisia
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <a
                href="tel:+21651829102"
                className="text-purple-600 hover:underline"
              >
                +216 51 829 102
              </a>
              <p className="text-purple-600 ">&</p>
              <a
                href="tel:+21628896143"
                className="text-purple-600 hover:underline"
              >
                +216 28 896 143
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div             data-aos="fade-up"
            data-aos-delay="200" className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send a Message
          </h3>

          <form  onSubmit={handleSubmit} className="space-y-6">
          <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-600 focus:border-purple-600 contact"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="contact"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-600 focus:border-purple-600 contact"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
              disabled={isLoading} // Désactiver le bouton pendant le chargement
            >
              {isLoading ? "Sending..." : "Send"} {/* Afficher l'état de chargement */}
            </button>
          </form>
        </div>
      </div>
      <Toaster /> {/* Toast notifications */}
    </section>
  );
}

export default Contact;
