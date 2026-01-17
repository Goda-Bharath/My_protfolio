import React from "react";

interface Initiative {
  image: string;
  title: string;
  description: string;
  icon?: string;
}

const initiatives: Initiative[] = [
  {
    title: "Hackathon Participation",
    image:
     "https://media.licdn.com/dms/image/v2/D4E22AQHfaQiHqFktYw/feedshare-shrink_2048_1536/B4EZjnP9PGIMAw-/0/1756226381514?e=1770249600&v=beta&t=fUqdhPzeqiURMhUiGy8Q4ETYao487MoKJyicrigM78A",
    description:
      "Participated in multiple college-level hackathons, working in teams to build real-world solutions within strict deadlines. Strengthened problem-solving, collaboration, and rapid development skills.",
    icon: "🏆",
  },
  {
    title: "Volunteering & Campus Activities",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQGh-5BPh9jOgg/feedshare-shrink_1280/B4EZrauBE8HMAs-/0/1764606090335?e=1770249600&v=beta&t=EiiKCnGC_c6BY3ho8TgmPx2qePwoFPyuvtupB7vNMCY",
    description:
      "Actively volunteered in technical and cultural college events, supporting coordination, participant handling, and execution. Gained leadership, teamwork, and responsibility experience.",
    icon: "🤝",
  },
  {
    title: "Mock Interview Experience",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQGLirm9Do0j_g/feedshare-shrink_2048_1536/B4EZhqNxMKGoAo-/0/1754128652071?e=1770249600&v=beta&t=UGKNohm-4-A-6hX0o6o2Crm_w962-N36Kq8gTA45EbA",
    description:
      "Participated in mock interviews and group discussions to improve technical articulation, confidence, and structured communication under interview-like scenarios.",
    icon: "🗣️",
  },
  {
    title: "Communication & Peer Guidance",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQFmh0u6P89Heg/feedshare-shrink_2048_1536/B4EZe2H6xEHIAo-/0/1751107219869?e=1770249600&v=beta&t=_2anjvvkMrIpT9aiCV4a-BUqXJpCgRZ2PXFn43BRZG4",
    description:
      "Guided peers in understanding technical concepts and career preparation. Improved mentoring, presentation, and interpersonal communication skills.",
    icon: "💬",
  },
];

const InitiativesSection: React.FC = () => {
  return (
    <section
      id="key-initiatives"
      className="px-6 md:px-10 bg-black text-white py-20"
    >
      <h2 className="text-3xl font-bold mb-10 text-blue-500 text-center" data-aos="zoom-in">
        My Initiatives
      </h2>

      <div className="grid gap-8 md:grid-cols-2" data-aos="zoom-in">
        {initiatives.map((initiative, index) => (
          <div
            key={index}
            className="
              group bg-gray-900 rounded-xl overflow-hidden shadow-lg
              transform transition duration-500 hover:scale-105
              hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-indigo-600
              hover:shadow-[0_0_15px_#00ffff]
            "
          >
            {/* Image */}
            <img
              src={initiative.image}
              alt={initiative.title}
              className="h-78 w-148 "
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 group-hover:text-white">
                <span>{initiative.icon}</span>
                {initiative.title}
              </h3>

              <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                {initiative.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InitiativesSection;
