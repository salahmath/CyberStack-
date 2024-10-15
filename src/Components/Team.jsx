import React from "react";

function Team() {
  const teamMembers = [
    {
      name: "Salah MAthlouthi",
      role: "Lead Developer",
      image:
   "/salah.png" },
    {
      name: "Karim Selmi",
      role: "Cybersecurity Expert",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQHAfNYOSWqM-w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693696658849?e=1734566400&v=beta&t=2jNHk-ZBAX8OLbkZq7JTKM6EzL5LgyT0FqA6m8YoUD0"
    },
  ];

  return (
    <section id="team" className="bg-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet the Team</h2>
        <p className="text-gray-600">
          A team of passionate professionals ready to help you achieve your
          goals.
        </p>
      </div>

      <div className="flex justify-center space-x-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-transform duration-500"
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
