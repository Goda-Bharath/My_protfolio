import image3 from "../assets/image3.png";
import html from "../assets/image1.png";
import image6 from "../assets/image6.png";
import image5 from "../assets/image5.png";
import image4 from "../assets/image4.png";
import image7 from "../assets/image7.png";

function Skills() {
  const skills = [
    {
      name: <span className="
  relative overflow-hidden
  inline-flex items-center justify-center
  px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2
  text-xs sm:text-sm md:text-sm lg:text-sm font-semibold tracking-widest uppercase
  text-yellow-600
  border border-cyan-400/40
  rounded-md
  bg-black/60
  backdrop-blur-md
  cursor-pointer

  shadow-[0_0_20px_rgba(34,211,238,0.35)]
  animate-pulse

  hover:shadow-[0_0_45px_rgba(34,211,238,0.8)]
  transition-all duration-300

  before:absolute before:top-0 before:left-0
  before:w-full before:h-full
  before:bg-gradient-to-b
  before:from-transparent before:via-cyan-400/40 before:to-transparent
  before:translate-y-[-120%]
  hover:before:translate-y-[120%]
  before:transition-transform before:duration-700
">
        PYTHON
      </span>, icon: image3
    },
    {
      name: <span className="
  relative overflow-hidden
  inline-flex items-center justify-center
  px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2
  text-xs sm:text-sm md:text-sm lg:text-sm font-semibold tracking-widest uppercase
  text-red-600
  border border-cyan-400/40
  rounded-md
  bg-black/60
  backdrop-blur-md
  cursor-pointer

  shadow-[0_0_20px_rgba(34,211,238,0.35)]
  animate-pulse

  hover:shadow-[0_0_45px_rgba(34,211,238,0.8)]
  transition-all duration-300

  before:absolute before:top-0 before:left-0
  before:w-full before:h-full
  before:bg-gradient-to-b
  before:from-transparent before:via-cyan-400/40 before:to-transparent
  before:translate-y-[-120%]
  hover:before:translate-y-[120%]
  before:transition-transform before:duration-700
">
        HTML
      </span>, icon: html
    },
    {
      name: <span className="
  relative overflow-hidden
  inline-flex items-center justify-center
  px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2
  text-xs sm:text-sm md:text-sm lg:text-sm font-semibold tracking-widest uppercase
  text-blue-600
  border border-cyan-400/40
  rounded-md
  bg-black/60
  backdrop-blur-md
  cursor-pointer

  shadow-[0_0_20px_rgba(34,211,238,0.35)]
  animate-pulse

  hover:shadow-[0_0_45px_rgba(34,211,238,0.8)]
  transition-all duration-300

  before:absolute before:top-0 before:left-0
  before:w-full before:h-full
  before:bg-gradient-to-b
  before:from-transparent before:via-cyan-400/40 before:to-transparent
  before:translate-y-[-120%]
  hover:before:translate-y-[120%]
  before:transition-transform before:duration-700
">
        CSS
      </span>, icon: image6
    },
    {
      name: <span className="
  relative overflow-hidden
  inline-flex items-center justify-center
  px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2
  text-xs sm:text-sm md:text-sm lg:text-sm font-semibold tracking-widest uppercase
  text-green-600
  border border-cyan-400/40
  rounded-md
  bg-black/60
  backdrop-blur-md
  cursor-pointer

  shadow-[0_0_20px_rgba(34,211,238,0.35)]
  animate-pulse

  hover:shadow-[0_0_45px_rgba(34,211,238,0.8)]
  transition-all duration-300

  before:absolute before:top-0 before:left-0
  before:w-full before:h-full
  before:bg-gradient-to-b
  before:from-transparent before:via-cyan-400/40 before:to-transparent
  before:translate-y-[-120%]
  hover:before:translate-y-[120%]
  before:transition-transform before:duration-700
">
        JAVA SCRIPT
      </span>, icon: image5
    },
    {
      name: <span className="
  relative overflow-hidden
  inline-flex items-center justify-center
  px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2
  text-xs sm:text-sm md:text-sm lg:text-sm font-semibold tracking-widest uppercase
  text-orange-600
  border border-cyan-400/40
  rounded-md
  bg-black/60
  backdrop-blur-md
  cursor-pointer

  shadow-[0_0_20px_rgba(34,211,238,0.35)]
  animate-pulse

  hover:shadow-[0_0_45px_rgba(34,211,238,0.8)]
  transition-all duration-300

  before:absolute before:top-0 before:left-0
  before:w-full before:h-full
  before:bg-gradient-to-b
  before:from-transparent before:via-cyan-400/40 before:to-transparent
  before:translate-y-[-120%]
  hover:before:translate-y-[120%]
  before:transition-transform before:duration-700
">
        REACT JS
      </span>, icon: image4
    },
    {
      name: <span className="
  relative overflow-hidden
  inline-flex items-center justify-center
  px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2
  text-xs sm:text-sm md:text-sm lg:text-sm font-semibold tracking-widest uppercase
  text-white
  border border-cyan-400/40
  rounded-md
  bg-black/60
  backdrop-blur-md
  cursor-pointer

  shadow-[0_0_20px_rgba(34,211,238,0.35)]
  animate-pulse

  hover:shadow-[0_0_45px_rgba(34,211,238,0.8)]
  transition-all duration-300

  before:absolute before:top-0 before:left-0
  before:w-full before:h-full
  before:bg-gradient-to-b
  before:from-transparent before:via-cyan-400/40 before:to-transparent
  before:translate-y-[-120%]
  hover:before:translate-y-[120%]
  before:transition-transform before:duration-700
">
        SQL
      </span>
      , icon: image7
    },
  ];

  return (
    <section id="skills" className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20 text-center" data-aos="zoom-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-2">What I do</h2>
          <p className="hero-description text-sm sm:text-base md:text-lg">
            Creating user-friendly web applications using modern technologies.
            Focused on writing clean, efficient code and building practical digital solutions.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-8 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16" data-aos="zoom-in">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center sm:h-28 md:h-32 lg:h-36 xl:h-40 2xl:h-44 
                                       bg-gray-900 rounded-lg shadow-lg 
                                       transform transition duration-500 
                                       hover:scale-110 
                                       bg-gradient-to-r  hover:via-pink-500 hover:to-indigo-500"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 sm:w-20 sm:h-26 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 mb-4 filter object-contain rounded drop-shadow-[0_0_15px_#00ffff]"
              />
              <p className="text-white font-semibold ">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;




