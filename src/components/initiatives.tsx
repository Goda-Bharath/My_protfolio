import React from "react";
import { useState } from "react";

import image8 from "../assets/image8.png"
import image9 from "../assets/image9.png"
import image10 from "../assets/image10.png"
import image11 from "../assets/image11.png"
import image12 from "../assets/image12.png"
import image15 from "../assets/image15.png"
import image13 from "../assets/coures crtf.png"

interface Initiative {
  image: string;
  title: string;
  description: string;
  icon?: string;
}

const initiatives: Initiative[] = [
  {
    title: "Python Full Stack Development Training & Certification",
    image: image13,
    description: `Completed a 6-month hands-on offline training program in Python Full Stack Development from Digital Edify Technologies Pvt. Ltd.

Gained practical experience in building end-to-end web applications through real-world learning and hands-on training.

Worked on multiple mini projects and web applications during the training to understand real development scenarios.

Key areas covered include frontend development (HTML, CSS, JavaScript, React.js), backend development using Python and Django, database design and integration (SQL), version control using Git, and full-stack application development.

Developed strong problem-solving skills, improved coding practices, and gained exposure to real-world workflows including debugging and version control.

This training experience strengthened my understanding of full-stack development and prepared me for real-world software development roles.`,
    icon: "💻",
  },
  {
    title: "Youth Employment Program Experience",
    image: image12,
    description: `
Completed the Youth Employment Program conducted by Infosys Foundation and Infosys in collaboration with Nirmaan Organization.

During this 3-month training program, I gained exposure to ITES (Information Technology Enabled Services) and Web Technologies while learning how industry tools, digital workflows, and professional environments operate.

Key learning outcomes included:

Understanding ITES fundamentals and the technology ecosystem
Awareness of software development workflows
Introduction to web technologies and frontend concepts
Guidance on off-campus placement preparation
Improved communication and professional skills
Experience in an industry-oriented learning environment
Strengthened time management while balancing academics and training

This experience strengthened my foundation in technology and motivated me to continue developing my skills in Full Stack Development.
  `,
    icon: "📁",
  },
  {
    title: "Volunteering & Campus Activities",
    image: image8,
    description: `Volunteered at events organized by Microsoft Office in collaboration with the Microsoft AI Innovation Hub.

Assisted with event coordination and execution during technical and interactive sessions.

Supported help desk operations, handling participant queries and basic issue resolution.

Helped clarify general doubts related to event activities and tools used during the sessions.

Assisted in conducting engagement activities, including quizzes and participant interactions.

Worked with the event team, gaining experience in team coordination, communication, and responsibility.`
    ,
    icon: "🤝",
  },
  {
    title: "Hackathon Participation",
    image: image9,
    description: `I participated in the Avalanche Hyderabad 2 day's Hackathon with my team, ComputeShare, and we developed a prototype for a “decentralized infrastructure share with StreamPay” using the Superfluid Protocol. The project focused on creating a seamless and interactive decentralized application.

My Contributions

Developed the frontend interface and integrated it with backend services

Designed an interactive website UI, including a custom mouse cursor effect for enhanced user experience

Contributed to backend integration, connecting the application flow with smart contract components to ensure smooth data handling and system performance

Hackathon Schedule`,
    icon: "🏆",
  },
  {
    title: "Mock Interview Experience",
    image: image10,
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
    image: image11,
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
  {
    title: "SQL (Basic) Certification - HackerRank",
    image: image15,
    description: `Successfully earned the SQL (Basic) Certification from HackerRank.

This certification validates my understanding of fundamental SQL concepts, including writing queries, working with relational databases, and handling data efficiently.

Key skills demonstrated include writing SQL queries for data retrieval and manipulation, understanding database structure and relationships, working with filtering, sorting, and aggregations, and applying logical thinking to solve database-related problems.

This achievement has strengthened my foundation in database concepts, which is essential for full stack development and real-world applications.`,
    icon: "🗄️",
  }
];

const InitiativesSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="keyinitiatives"
      className="px-6 md:px-20 bg-black text-white py-10"
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
            <img
              src={initiative.image}
              alt={initiative.title}
              className="h-80 w-140  "
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3  flex items-center gap-2 group-hover:text-white">
                <span>{initiative.icon}</span>
                {initiative.title}
              </h3>

              <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                {expandedIndex === index
                  ? initiative.description
                  : `${initiative.description.slice(0, 240)}...`}
              </p>
            </div>
            <button
              onClick={() => toggleDescription(index)}
              className="
              mt-5 px-5 py-2 rounded-lg
              bg-orange-500 text-white font-semibold
              hover:bg-orange-600 transition
              block mx-auto text-center"
            >
              {expandedIndex === index ? "View Less" : "View More"}
            </button>

          </div>
        ))}
      </div>
    </section>
  );
};
export default InitiativesSection;
