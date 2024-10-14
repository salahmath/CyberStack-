import React from "react";

function Contact() {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            We would love to hear from you! Whether you have a question, want to
            work together, or just say hello.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <a
                href="mailto:info@yourcompany.com"
                className="text-purple-600 hover:underline"
              >
                info@yourcompany.com
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
                123 Your Street, Your City, Country
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <a
                href="tel:+1234567890"
                className="text-purple-600 hover:underline"
              >
                +123 456 7890
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send a Message
          </h3>
          <form
            action="mailto:info@yourcompany.com"
            method="POST"
            encType="multipart/form-data"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-600 focus:border-purple-600"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-600 focus:border-purple-600"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-600 focus:border-purple-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
