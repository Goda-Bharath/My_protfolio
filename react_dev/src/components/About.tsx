// src/components/About.tsx
function About() {
  return (
      <section id="about" className="relative py-20   bg-black
text-white">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold mb-2 text-blue-500">About Me</h2>
      <p className="text-lg text-gray-100">
        Passionate <span className="text-cyan-400">developer</span> with a vision for the future
      </p>
    </div>

    {/* About Content */}
    <div className="flex flex-col md:flex-row justify-center items-start gap-8  ">
      <div className="flex-1">
        <div className="p-6 backdrop-blur-xl bg-white/90 border border-white/90 rounded-xl
 backdrop-blur-md rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-black">My Story</h3>
          <p className="mb-4 text-black">
            I'm a passionate full-stack developer with over 5 years of experience creating
            innovative digital solutions. My journey began with curiosity about how websites work,
            and has evolved into a deep love for crafting elegant, efficient, and user-centered
            applications.
          </p>
          <p className="mb-4 text-black">
            I specialize in modern web technologies and have a keen eye for design.
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source
            projects, or sharing knowledge with the developer community.
          </p>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe illum atque odit
            est, dolores repellat adipisci numquam amet, explicabo sunt nulla ullam laudantium vitae
            voluptatem ipsam nihil ea nemo!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default About;
