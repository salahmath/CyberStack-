import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
function Partners() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once or every time you scroll
      mirror: true,
    });
  }, []);

  const images = [
    {
      image: "https://skillforge.com/wp-content/uploads/2020/10/javascript.png", // JavaScript
      key: "JavaScript",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png", // Python
      key: "Python",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png", // Java
      key: "Java",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png", // PHP
      key: "PHP",
    },

    {
      image: "https://cdn.worldvectorlogo.com/logos/html-1.svg", // HTML5
      key: "HTML5",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", // CSS3
      key: "CSS3",
    },
    {
      image: "https://www.svgrepo.com/show/303360/nodejs-logo.svg", // Node.js
      key: "Node.js",
    },
    {
      image:
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", // React
      key: "React .js",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg", // Angular
      key: "React Native",
    },
    ,
    {
      image:
        "https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png", // Kali Linux (Cybersécurité)
      key: "Next.js",
    },
    {
      image: "https://nmap.org/images/nmap-logo-256x256.png", // Kali Linux (Cybersécurité)
      key: "Nmap",
    },
    {
      image: "https://miro.medium.com/v2/resize:fit:710/0*FvyoEolATs1TVCy9.png", // Kali Linux (Cybersécurité)
      key: "BurpSuit",
    },
    {
      image:
        "https://atomrace.com/blog/wp-content/uploads/2017/10/metasploit-logo-300x300.png", // Kali Linux (Cybersécurité)
      key: "Metasploit",
    },
    {
      image: "https://www.kali.org/tools/nikto/images/nikto-logo.svg", // Kali Linux (Cybersécurité)
      key: "nikto",
    },
    {
      image:
        "https://e1.pngegg.com/pngimages/342/752/png-clipart-macos-app-icons-wireshark.png", // Kali Linux (Cybersécurité)
      key: "wireshark",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:954/1*ssgbiwYHOi9gIXt9pGCJYw.png", // Kali Linux (Cybersécurité)
      key: "wireshark",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div>
        <div data-aos="fade-up" className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Languages We Use
          </h2>
          <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Discover the programming languages and technologies that power our
            projects.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className=" mx-auto mt-36 flex justify-center mt-10 mb-10"
          >
            <div className="marquee" style={{ padding: "40px 0" }}>
              {" "}
              {/* Augmentez le padding pour un plus grand espace vertical */}
              <Marquee>
                {images.map((image) => {
                  return (
                    <div className="langagues mx-8">
                      {" "}
                      {/* Utilisez mx-8 pour plus d'espace entre les images */}
                      <img
                        key={image.key}
                        src={image.image}
                        alt={`Partner ${image.key}`}
                        className="h-16" // Changez à h-16 pour agrandir l'image
                      />
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
