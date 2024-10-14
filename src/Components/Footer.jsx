import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once or every time you scroll
      mirror: true,
    });
  }, []);
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div className="lg:col-span-1 space-y-4">
          <a href="/" className="text-3xl font-bold text-grey-600">
            CYBER <span className="text-red-500">STACK</span>
          </a>
          <p className="text-gray-400">
            Building the future of web, mobile, and cybersecurity services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <p className="text-gray-400">
            Habib Borguiba Street, Ben arous, Tunisia
          </p>
          <p className="text-gray-400">
            <a
              href="mailto:contact.cyberstack@gmail.com"
              className="hover:text-white transition duration-300"
            >
              contact.cyberstack@gmail.com
            </a>
          </p>
          <p className="text-gray-400">
            <a
              href="tel:+21651829102"
              className="hover:text-white transition duration-300"
            >
              +216 51 829 102
            </a>
          </p>

          <p className="text-gray-400">
            <a
              href="tel:+21628896143"
              className="hover:text-white transition duration-300"
            >
              +216 28 896 143
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/cyberstacktn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.106-.894-2-2-2s-2 .894-2 2v5.5h-3v-10h3v1.417c.87-.959 2.2-1.417 3.5-1.417 2.481 0 4.5 2.019 4.5 4.5v5.5z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.111.82-.261.82-.58v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.546-1.388-1.333-1.759-1.333-1.759-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.833 2.809 1.303 3.494.997.109-.775.419-1.303.763-1.602-2.665-.305-5.466-1.334-5.466-5.933 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.398 3.003-.403 1.019.005 2.045.137 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.118 3.176.77.84 1.236 1.91 1.236 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.824 1.104.824 2.223v3.293c0 .322.217.695.824.579 4.766-1.585 8.205-6.083 8.205-11.385 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.563-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.201-4.92 4.917 0 .385.044.76.127 1.122-4.087-.205-7.719-2.164-10.148-5.144-.423.725-.666 1.562-.666 2.457 0 1.694.863 3.188 2.175 4.065-.802-.025-1.556-.246-2.212-.616v.062c0 2.366 1.684 4.342 3.918 4.788-.41.111-.842.171-1.287.171-.314 0-.621-.03-.921-.086.621 1.941 2.421 3.355 4.555 3.395-1.669 1.306-3.778 2.086-6.065 2.086-.394 0-.779-.023-1.161-.068 2.164 1.388 4.735 2.197 7.504 2.197 9.005 0 13.923-7.46 13.923-13.924 0-.211-.004-.423-.014-.634.956-.691 1.786-1.56 2.44-2.548z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} CyberStack. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
