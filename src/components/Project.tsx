import cartImg from "../assets/cart.png";
import intern from "../assets/itern.png";
import Image0 from "../assets/Image0.png";

function FeaturedProjects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.",
      image: cartImg,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/",
      live: "#",
    },
    {
      title: "AI Chat Application",
      description:
        "Real-time chat application with AI integration using WebSocket and machine learning APIs for intelligent responses.",
      image: intern,
      tech: ["Vue.js", "Python", "WebSocket", "OpenAI"],
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
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* Buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-2 rounded-full hover:bg-red-700"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700"
              >
                Live
              </a>
            </div>

            {/* Info */}
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

      {/* GitHub Section */}
      <section className="py-16 bg-black text-white">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
          GitHub Contribution Activity
        </h2>

        <div className="flex justify-center">
          <img
            src="https://ghchart.rshah.org/YOUR_GITHUB_USERNAME"
            alt="GitHub Graph"
            className="rounded-xl border border-gray-700 w-[700px] h-[200px]"
          />
        </div>
      </section>
    </section>
  );
}

export default FeaturedProjects;