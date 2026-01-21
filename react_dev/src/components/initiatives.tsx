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
    description:`I participated in the Avalanche Hyderabad 2 day's Hackathon with my team, ComputeShare, and we developed a prototype for a “decentralized infrastructure share with StreamPay” using the Superfluid Protocol. The project focused on creating a seamless and interactive decentralized application.

My Contributions

Developed the frontend interface and integrated it with backend services

Designed an interactive website UI, including a custom mouse cursor effect for enhanced user experience

Contributed to backend integration, connecting the application flow with smart contract components to ensure smooth data handling and system performance

Hackathon Schedule`,
    icon: "🏆",
  },
  {
    title: "Volunteering & Campus Activities",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQGh-5BPh9jOgg/feedshare-shrink_1280/B4EZrauBE8HMAs-/0/1764606090335?e=1770249600&v=beta&t=EiiKCnGC_c6BY3ho8TgmPx2qePwoFPyuvtupB7vNMCY",
    description:`Volunteered at events organized by Microsoft Office in collaboration with the Microsoft AI Innovation Hub.

Assisted with event coordination and execution during technical and interactive sessions.

Supported help desk operations, handling participant queries and basic issue resolution.

Helped clarify general doubts related to event activities and tools used during the sessions.

Assisted in conducting engagement activities, including quizzes and participant interactions.

Worked with the event team, gaining experience in team coordination, communication, and responsibility.`
           ,
    icon: "🤝",
  },
  {
    title: "Mock Interview Experience",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQGLirm9Do0j_g/feedshare-shrink_2048_1536/B4EZhqNxMKGoAo-/0/1754128652071?e=1770249600&v=beta&t=UGKNohm-4-A-6hX0o6o2Crm_w962-N36Kq8gTA45EbA",
    description:
      `I had the opportunity to participate in a mock interview organized by Vivekananda Degree College as part of our Campus Recruitment Training (CRT). The session provided practical exposure to real-world interview scenarios and valuable feedback from trainers and panel members.

Key Learnings:

Presenting myself with confidence and maintaining positive body language

Communicating thoughts clearly and effectively

Staying calm and thinking before answering under pressure

Understanding interview expectations and evaluation criteria

Structuring answers for clarity and handling questions confidently

This experience provided practical insights into the interview process and helped improve my confidence and preparedness for future opportunities.`,
    icon: "🗣",
  },
  {
    title: "Communication & Peer Guidance",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQFmh0u6P89Heg/feedshare-shrink_2048_1536/B4EZe2H6xEHIAo-/0/1751107219869?e=1770249600&v=beta&t=_2anjvvkMrIpT9aiCV4a-BUqXJpCgRZ2PXFn43BRZG4",
    description:
    `First Time Speaking on Stage — College Seminar Experience:     

    I had the opportunity to speak on stage for the first time at a college seminar. This experience was a valuable lesson in stepping out of my comfort zone, managing stage anxiety, and developing confidence.

During the Q&A session, I asked a common interview question:

“Why should we hire you?”

The response highlighted the importance of aligning:

Skills

Values

Mindset

What companies truly look for in candidates

Key Learnings:

Improved public speaking and communication skills

Gained a deeper understanding of interview expectations

Developed confidence to ask meaningful, career-oriented questions

Benefited from interactions with mentors and professionals`,
    icon: "💬",
  },
];

const InitiativesSection: React.FC = () => {
  return (
    <section
      id="keyinitiatives"
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
              className="h-82 w-198  "
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
