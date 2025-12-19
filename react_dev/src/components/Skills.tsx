import python from "../assets/python.png";
import html from "../assets/html.png";
import css from "../assets/cs.png";
import js from "../assets/js.png";
import reactIcon from "../assets/react.png";
import github from "../assets/github.png";

function Skills() {
  const skills = [
    { name: "PYTHON", icon: python },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JAVASCRIPT", icon: js },
    { name: "REACT JS", icon: reactIcon },
    { name: "GITHUB", icon: github },
  ];

  return (
    <section id="skills" className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-blue-500 mb-2">What I do</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I am from Pakistan and currently living in Karachi. I am doing Bachelor's in Software Engineering and I will graduate in the year 2021.
            I am a UI/UX designer and currently working as a freelancer.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center 
                                       bg-gray-900 rounded-lg p-6 shadow-lg 
                                       transform transition duration-500 
                                       hover:scale-110 drop-shadow-[0_0_8px_#00ffff] 
                                       bg-gradient-to-r bg:from-purple-500 hover:via-pink-500 hover:to-indigo-500"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4 filter rounded  drop-shadow-[0_0_15px_#00ffff]"
              />
              <p className="text-white font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;




