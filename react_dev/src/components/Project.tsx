
function FeaturedProjects() {
    const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.",
    image: "/src/assets/cart.png", // replace with your image path
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/", // replace with actual link
    live: "#",   // replace with actual link
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI integration using WebSocket and machine learning APIs for intelligent responses.",
    image: "/src/assets/image.png",
    tech: ["Vue.js", "Python", "WebSocket", "OpenAI"],
    github: "#", // replace with actual link
    live: "#",   // replace with actual link
  },
];
  return (
    <section id="projects" className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-500 mb-2">Featured Projects</h2>
        <p className="text-gray-400">Showcasing my latest work and innovations</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-85 drop-shadow-[0_0_8px_#facc15]"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* Overlay Buttons (GitHub & Live) */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 opacity-100 transition-opacity">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.476 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.903-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.303 24 12c0-6.628-5.372-12-12-12z"/>
                </svg>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 3v2h3.59L8.3 14.29l1.42 1.42L19 6.41V10h2V3h-7zM5 5h9v2H5v12h12v-9h2v11H3V5z"/>
                </svg>
              </a>
            </div>

            {/* Project Info */}
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-blue-400 to-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
