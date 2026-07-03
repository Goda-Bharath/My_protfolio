import cartImg from "../assets/cart.png";
import intern from "../assets/itern.png";
import github from "../assets/github.png";

function FeaturedProjects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.",
      image: cartImg,
      tech: ["React.js", "HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/",
      live: "#",
    },
    {
      title: "CRM Dashboard",
      description:
        "Interactive dashboard for managing customer relationships with real-time data visualization.",
      image: intern,
      tech: ["React.js", "TypeScript", "Supabase", "HTML"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-500 mb-2">
          Featured Projects
        </h2>
        <p className="text-gray-400">
          Showcasing my latest work and innovations
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-95 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56"
            />

            <div className="absolute top-4 right-4 flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black p-2 rounded-full"
              >
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-10 h-10 text-white hover:text-gray-300 hover:scale-110 transition"
>
  <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.93c.58.1.79-.25.79-.56v-2.17c-3.26.71-3.95-1.39-3.95-1.39-.54-1.37-1.31-1.73-1.31-1.73-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.75-1.57-2.61-.3-5.35-1.3-5.35-5.78 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.2a11.1 11.1 0 015.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.65.23 2.87.11 3.17.75.82 1.2 1.87 1.2 3.15 0 4.49-2.75 5.48-5.37 5.77.42.36.79 1.08.79 2.17v3.21c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
</svg>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 p-2  rounded-full "
              >
                🔗
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section id="githubactivity"  className="py-16 bg-black text-white">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
          GitHub Contribution Activity
        </h2>

        <div className="flex justify-center">
          <img
            src={github}
            alt="GitHub Graph"
            className="rounded-xl border border-gray-700 w-[700px] h-[200px]"
          />
        </div>
      </section>
    </section>
  );
}

export default FeaturedProjects;