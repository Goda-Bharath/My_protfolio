import heroimage from "../assets/url-2.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-black from-gray-900 via-black to-gray-900 overflow-hidden font-poppins text-white px-4 md:px-1 p-10 "
    >
      {/* Futuristic Background Grid */}
      <div className="absolute inset-0 z-0">
        {/* Animated Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-blck animate-pulse"></div>

        {/* Neon Grid Pattern */}
        <div className="absolute inset-0 bg-black animate-pulse-slow"></div>

        {/* Scanning Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/vibrant-liquid-wavy-background-3d-illustration-abstract-iridescent-fluid-render-neon-holographic-smooth-surface-with-colorful-interference-stylish-spectrum-flow-motion_1217-2505.jpg?t=st=1768350731~exp=1768354331~hmac=5623538143e27bdce04074d7e867c07fd265112ce5451dd6013c8a9be39d4e55')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }} ></div>

        {/* Enhanced Floating Shapes with Neon Glow */}
        <div className="absolute w-1/4 max-w-[200px] aspect-square top-[10%] left-[5%] rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border-2 border-cyan-400/30 shadow-2xl shadow-cyan-500/20 animate-bounce-slow blur-sm"></div>
        <div className="absolute w-1/6 max-w-[150px] aspect-square top-[65%] right-[10%] rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 border-2 border-pink-500/30 shadow-2xl shadow-pink-500/20 animate-bounce-slow delay-200 blur-sm"></div>
        <div className="absolute w-1/8 max-w-[120px] aspect-square top-[25%] right-[8%] rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-500/20 border-2 border-emerald-400/30 shadow-2xl shadow-emerald-500/20 animate-bounce-slow delay-400 blur-sm"></div>
        <div className="absolute w-1/10 max-w-[100px] h-[6rem] bottom-[30%] left-[40%] rounded-full bg-gradient-to-r from-violet-500/20 to-pink-500/20 border-2 border-violet-500/30 shadow-2xl shadow-violet-500/20 animate-bounce-slow delay-600 blur-sm"></div>

        {/* Corner Glows */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-b from-cyan-500/10 to-transparent blur-xl"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-purple-500/10 to-transparent blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-pink-500/10 to-transparent blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-emerald-500/10 to-transparent blur-xl"></div>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 flex-1  text-center md:text-left ">
        <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent ">
          <span>Hello I<span className="text-pink-400">'</span>m</span>
          <br />
          <span className="text-transparent bg-gradient-to-r  from-pink-400 via-purple-400 to-cyan-400 bg-clip-text animate__jello  ">Goda Bharath</span>
        </div>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-fuchsia-700 bg-clip-text text-transparent animate__animated animate__bounceInUp animate__slow">
          <span className="text-transparent bg-gradient-to-r text-blue-600 bg-clip-text ">Full Stack Developer</span><span className="text-white">  &</span><span className="text-transparent bg-gradient-to-r text-blue-600 bg-clip-text"> Frontend Developer</span>
        </h1>

        <p className="text-whte md:max-w-lg lg:max-w-xl bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text  h-16 w-16                            
    sm:h-16 sm:w-16                        
    md:h-20 md:w-20  ">
          <span className=" absolute"> Crafting digital experiences with cutting-edge technology and
            innovative solutions.Building the future, one line of code at a time. </span>
          <br />

        </p>


        <div className="flex flex-wrap gap-6 p-5 justify-center md:justify-start">
          {/* Enhanced Futuristic Cyan-Purple Button */}
          <a
            href="#projects"
            className="
              px-4 py-4 rounded-full relative overflow-hidden
              bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
              text-white font-semibold
              shadow-2xl shadow-cyan-500/50
              transition-all duration-500 ease-out
              hover:scale-110 hover:shadow-3xl hover:shadow-cyan-400/70
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:animate-shimmer before:opacity-0 hover:before:opacity-100
            "
          >
            <span className="text-white hover:text-black font-bold">View My Work</span>
          </a>

          {/* Enhanced Futuristic Pink Button */}
          <a
            href="#contact"
            className="
              px-8 py-4 rounded-full relative overflow-hidden
              bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600
              text-white font-semibold
              shadow-2xl shadow-pink-500/50
              transition-all duration-500 ease-out
              hover:scale-110 hover:shadow-3xl hover:shadow-pink-400/70
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:to-transparent before:animate-shimmer before:opacity-0 hover:before:opacity-100
            "
          >
            <span className="text-white hover:text-black font-bold">Get in Touch</span>
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative z-10 flex-1 flex md:justify-end mt-10 md:mt-1 ">
        <div className="relative">
          <img
            src={heroimage}
            alt="Goda Bharath - Full Stack Developer"
            className="
              w-3/5 max-w-[800px] md:max-w-[800px] lg:max-w-[850px]
              rounded-2xl
              border-4 border-gradient-to-r border-transparent bg-gradient-to-r from-orange-600/100 via-purple-500/30 to-blue-200/100 p-8 m-37
              shadow-2xl shadow-purple-700/100
              animate__animated animate__fadeInRight animate__delay-1s
              backdrop-blur-sm
            "
          />
          {/* Image Glow Ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r  animate-pulse -z-10"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
