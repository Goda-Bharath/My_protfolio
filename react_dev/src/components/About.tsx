// src/components/About.tsx
function About() {
  return (
    <section id="about" className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-1 ">

        {/* Section Header */}
        <div className="mb-18 text-center" data-aos="zoom-in">
          <h2 className="text-4xl font-bold mb-6 text-blue-500 ">
            About Me
          </h2>
          <p className="text-lg text-gray-100">
            Passionate <span className="text-cyan-400">developer</span> with a vision for the future
          </p>
        </div>

        {/* About Content */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <div className="flex-1">

            {/* ✅ AOS WRAPPER (IMPORTANT) */}
            <div data-aos="zoom-in">

              {/* GROUP WRAPPER (NO AOS HERE) */}
              <div className="relative group overflow-hidden">

                {/* FLOATING HOVER IMAGE */}
                <h5
                  className="
      text-red-600
      text-4xl
      font-bold
      pointer-events-none
      absolute
      right-[-260px]
      top-1
      -translate-y-1/8
      opacity-1
      z-20
      transition-all
      duration-900
      ease-out
      group-hover:right-[-20px]
      group-hover:opacity-200
    "
                >
                  Innovate, Code, Deploy.   <span className="text-white/3">______________________________</span>                          
                </h5>


                {/* CARD CONTENT */}
                <div className="relative z-10 p-6 backdrop-blur-xl bg-white/90 border border-white/90 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-black">
                    My Story
                  </h3>

                  <p className="mb-4 text-black">
                    I am a
                    <span className="mx-1 text-amber-600 font-semibold">
                      Python Full-Stack Developer
                    </span>
                    with a strong interest in building
                    <span className="text-sky-700 font-semibold">
                      {" "}reliable and user-friendly web applications
                    </span>.
                    My journey into development began with curiosity about how websites function.
                  </p>

                  <p className="mb-4 text-black">
                    I work with
                    <span className="text-purple-600 font-semibold">
                      {" "}Python on the backend
                    </span>
                    and
                    <span className="text-red-600 font-medium">
                      {" "}modern front-end technologies
                    </span>
                    to create complete web solutions, focusing on clean and maintainable code.
                  </p>

                  <p className="text-black">
                    I continuously improve my skills through
                    <span className="text-pink-400 font-medium">
                      {" "}hands-on projects
                    </span>,
                    learning new tools, and applying best practices to
                    <span className="font-medium">
                      {" "}grow steadily as a developer
                    </span>.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
