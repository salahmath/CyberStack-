import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Animation should happen every time you scroll
      mirror: true, // Ensures animations work when scrolling up
    });
  }, []);

  const teamMembers = [
    {
      name: "Joe Doe",
      role: "Full Stack Developer",
      image:
        "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    },
    {
      name: "Salah Mathlouthi",
      role: "Co-founder & CTO",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHYKaHFEN38VQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725014959427?e=1734566400&v=beta&t=-_aF9yJH2QbLdTde-LydRYRn2W-QufVq3ElTpiWOuK8",
    },
    {
      name: "Karim Selmi",
      role: "Co-founder & CEO",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQHAfNYOSWqM-w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693696658849?e=1734566400&v=beta&t=2jNHk-ZBAX8OLbkZq7JTKM6EzL5LgyT0FqA6m8YoUD0",
    },
    {
      name: "John Cliff",
      role: "Cybersecurity Spécialist",
      image:
        "https://t3.ftcdn.net/jpg/00/53/01/86/360_F_53018621_KQbIttjKsgF4LIH6JwpACBSdTHgepTLz.jpg",
    },
    {
      name: "Jassmin Kroft",
      role: "Marketing Manager",
      image:
        "https://www.shutterstock.com/image-vector/person-gray-photo-placeholder-woman-600nw-1241538838.jpg",
    },
  ];

  return (
    <section id="team" className="bg-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2
          className="text-4xl font-bold text-gray-800 mb-4"
          data-aos="fade-up"
        >
          Meet the Team
        </h2>
        <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
          A team of passionate professionals ready to help you achieve your
          goals.
        </p>
      </div>

      <div className="flex justify-center space-x-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-transform duration-500"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`} // Staggered delay for each team member
          >
            <div className="overflow-hidden rounded-full w-40 h-40 mx-auto mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-purple-600">{member.role}</p>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-purple-600 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
