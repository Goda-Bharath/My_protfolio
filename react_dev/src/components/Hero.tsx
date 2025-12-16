import heroimage from "../assets/url-2.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-black overflow-hidden font-poppins text-white px-4 md:px-8"
    >
      {/* Floating Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-1/4 max-w-[200px] aspect-square top-[10%] left-[5%] rounded-full bg-gradient-to-r from-cyan-400 to-purple-700 opacity-10 animate-bounce-slow"></div>
        <div className="absolute w-1/6 max-w-[150px] aspect-square top-[65%] right-[10%] rounded-full bg-gradient-to-r from-pink-500 to-purple-700 opacity-10 animate-bounce-slow delay-200"></div>
        <div className="absolute w-1/8 max-w-[120px] aspect-square top-[25%] right-[8%] rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-10 animate-bounce-slow delay-400"></div>
        <div className="absolute w-1/10 max-w-[100px] h-[6rem] bottom-[30%] left-[40%] rounded-full bg-gradient-to-r from-pink-500 to-purple-700 opacity-10 animate-bounce-slow delay-600"></div>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 flex-1 text-center md:text-left space-y-6">
        <div className="text-3xl md:text-5xl font-bold">
          <span>Hello I<span className="text-pink-600">'</span>m</span>
          <br />
          <span className="text-pink-00">Goda Bharath</span>
        </div>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold  animate__animated animate__bounceInLeft animate__slow ">
          <span className="text-pink-600">Full Stack</span>Developer &  Frontend <span className="text-pink-600">Developer</span>
        </h1>

        <p className="text-gray-400 max-w-full md:max-w-lg lg:max-w-xl">
          Crafting digital experiences with cutting-edge technology and innovative solutions.
          Building the future, one line of code at a time.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">

          {/* Futuristic Cyan-Purple Button */}
          <a
            href="#projects"
            className="
    px-6 py-3 rounded-full
    bg-gradient-to-r from-cyan-400 to-purple-700
    text-gray-100
    shadow-lg shadow-cyan-500/40
    transition-all duration-300 ease-in-out
    hover:scale-105
    hover:text-white
    hover:shadow-2xl hover:shadow-cyan-400/70
  "
          >
            View My Work
          </a>


          {/* Futuristic Pink Button */}
          <a
            href="#contact"
            className="
      px-6 py-3 rounded-full 
      bg-pink-500 
      text-white 
      shadow-lg shadow-pink-500/40 
      transition-transform duration-300 ease-in-out
      hover:bg-pink-600 hover:scale-105 hover:shadow-2xl hover:shadow-pink-400/70
    "
          >
            Get In Touch
          </a>

        </div>

      </div>

      {/* Hero Image */}
      <div className="relative z-10 flex-1 flex justify-center  md:justify-end mt-10 md:mt-0">
        <img
          src={heroimage}
          alt="Hero"
          className="
    w-3/5
    max-w-[400px] md:max-w-[600px] lg:max-w-[600px]
    rounded-xl
    border-2 border-pink-500/40
    shadow-lg shadow-pink-500/30
    animate__animated animate__fadeInRight
  "
        />

      </div>
    </section>
  );
}

export default Hero;
