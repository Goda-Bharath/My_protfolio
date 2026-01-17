import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Futuristic gradients for each nav item
  const navColors = [
    "from-cyan-400 to-purple-700 ",   // Home
    "from-pink-500 to-yellow-400",   // About
    "from-green-400 to-blue-500",    // Skills
    "from-red-500 to-indigo-500",    // Projects
    "from-orange-400 to-pink-500",   // Resume
    "from-purple-400 to-cyan-400",   // Contact
  ];

  const navItems = ["Home", "About Me", "Skills", "Projects", "Key Initiatives","Resume", "Contact"];
  const navLinks = ["#home", "#about", "#skills", "#projects", "#key initistives","#resume", "#contact"];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-700 bg-clip-text text-transparent">
          <a href="#home">Bharath</a>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden cursor-pointer text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={navLinks[index]}
                 className="
    neon-btn
    relative inline-block
    text-white font-medium px-6 py-2 rounded-full
    transition duration-300 hover:scale-110
    bg-black/60 backdrop-blur-md
    before:content-['']
    before:absolute before:inset-0 before:rounded-full
    before:p-[3px]
    before:bg-[linear-gradient(90deg,#00c6ff,#6a00ff,#ff004c)]
    before:bg-[length:400%_400%]
    before:blur-[6px]
    before:opacity-0 hover:before:opacity-100
    hover:before:animate-electricGlow
    before:-z-10
  "
>
                {item}
              </a>

            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 flex flex-col gap-4 px-8 py-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={navLinks[index]}
                className={`
                  block text-white font-medium px-4 py-2 rounded 
                  bg-clip-text text-transparent bg-gradient-to-r ${navColors[index]}
                  transition duration-300 
                  hover:scale-110 
                  hover:text-white 
                  hover:bg-none
                  hover:shadow-[0_0_18px_#00ffff]
                  hover:border hover:border-cyan-400
                `}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Header;
