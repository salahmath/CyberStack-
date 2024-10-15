import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once or every time you scroll
      mirror: true,
    });
  }, []);

  return (

    <section id="about" className="bg-gray-100 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-gray-800 mb-4"
            data-aos="fade-up"
          >
            About Us
          </h2>
          <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Learn more about who we are and what drives us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="flex flex-col justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-4">
              We are committed to delivering high-quality services in web
              development, mobile apps, and cybersecurity. Our team is
              passionate about providing innovative solutions that meet the
              diverse needs of our clients.
            </p>
            <p className="text-gray-600">
              Our goal is to become the go-to partner for businesses looking to
              thrive in the digital age by empowering them with cutting-edge
              technology.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHRlYW18ZW58MHx8fHwxNjkxNTQ0NzUz&ixlib=rb-1.2.1&q=80&w=800"
              alt="Team working on a project"
              className="rounded-lg shadow-lg w-full h-full object-cover image1"
            />
          </div>

          <div
            className="order-2 md:order-1"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI1fHxpbm5vdmF0aW9ufGVufDB8fHx8MTY5MTU0NDcyNQ&ixlib=rb-1.2.1&q=80&w=800"
              alt="Innovation in technology"
              className="rounded-lg shadow-lg w-full h-full object-cover image1"
            />
          </div>

          <div
            className="flex flex-col justify-center order-1 md:order-2 "
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">
              Why Choose Us?
            </h3>
            <p className="text-gray-600 mb-4">
              With a wealth of experience in the IT industry, our team provides
              expert solutions that guarantee growth and success. We work
              closely with clients to ensure we deliver results that exceed
              expectations.
            </p>
            <p className="text-gray-600">
              From cybersecurity services to full-stack development, we
              prioritize security, performance, and scalability in all our
              projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
