import React from "react";

function Team() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1hbnxlbnwwfHx8fDE2MzY4NzY2NTM&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      name: "Jane Smith",
      role: "Cybersecurity Expert",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHx3b21hbnxlbnwwfHx8fDE2MzY4NzY2NTM&ixlib=rb-1.2.1&q=80&w=400",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20">
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
