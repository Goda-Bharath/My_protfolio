function Resume() {
  return (
    <section id="resume" className="w-full bg-black py-20 px-4 text-white">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-500 mb-3">Resume</h1>
        <p className="text-gray-400">
          Download my resume or explore my experience
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left Experience Card */}
        <div className="col-span-2 bg-[#171722]/70 backdrop-blur-md rounded-2xl p-10 border border-white/10 shadow-xl">
          <h2 className="text-xl font-semibold mb-8">
            Experience Highlights
          </h2>

          {/* ITEM 1 */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <a href="#" className="text-blue-400 hover:underline">
                TechCorp Inc.
              </a>
              <p className="text-gray-400 mt-1">2021 - Present</p>
            </div>

            <p className="font-semibold text-lg">Senior Full Stack Developer</p>
          </div>

          {/* ITEM 2 */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <a href="#" className="text-blue-400 hover:underline">
                StartupXYZ
              </a>
              <p className="text-gray-400 mt-1">2019 - 2021</p>
            </div>

            <p className="font-semibold text-lg">Frontend Developer</p>
          </div>

          {/* ITEM 3 */}
          <div className="flex justify-between items-start">
            <div>
              <a href="#" className="text-blue-400 hover:underline">
                WebSolutions Ltd.
              </a>
              <p className="text-gray-400 mt-1">2018 - 2019</p>
            </div>

            <p className="font-semibold text-lg">Junior Developer</p>
          </div>
        </div>

        {/* Right Download Card */}
        <div className="bg-[#171722]/70 backdrop-blur-md rounded-2xl p-10 border border-white/10 shadow-xl flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold text-blue-400">
            Download Resume
          </h2>

          <p className="text-gray-400 mt-3 mb-8 max-w-xs">
            Get a detailed overview of my experience, skills, and achievements.
          </p>

          {/* Gradient Download Button */}
          <a
            href="public/Bharath_Fullstack_Resume.pdf"
                className="
        px-6 py-3 rounded-full 
        bg-blue-700 
        shadow-lg shadow-blue-500/50
        transition-all duration-300 ease-in-out
        hover:scale-110 
        hover:shadow-[0_0_20px_#0ea5e9] 
        hover:bg-gradient-to-r from-blue-500 to-indigo-600
      "
          >
           <span className="text-black hover:text-white">⬇ Download PDF</span>
          </a>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Resume;