export default function AnimatedLines() {
  return (
    <div className="relative min-h-screen bg-[#111] overflow-hidden">
      <style>
        {`
          @keyframes drop {
            0% { top: -50%; }
            100% { top: 110%; }
          }
        `}
      </style>
      <div className="absolute inset-0 w-[25vw] mx-auto flex justify-between">
        {[...Array(35)].map((_, i) => (
          <div key={i} className="relative w-[1px] h-full overflow-hidden">

            <div
              className={`
                absolute left-0 w-full h-[15vh]
                bg-gradient-to-b from-transparent ${fruitColor(i)}
                blur-[2px]
                animate-[drop_7s_cubic-bezier(0.4,0.26,0,0.97)_infinite]
              `}
              style={{ animationDelay: `${i * 0.8}s` }}
            ></div>

          </div>
        ))}
      </div>-

    </div>
  );
}

const fruitColor = (i) => {
 const colors = [
    "from-orange-500 via-pink-500 to-purple-600",
    "from-lime-400 via-emerald-500 to-green-600",
    "from-blue-500 via-cyan-400 to-indigo-600",
    "from-yellow-400 via-orange-500 to-red-500",
    "from-purple-500 via-indigo-500 to-blue-500",
    "from-teal-400 via-cyan-500 to-sky-500",
    "from-red-500 via-pink-500 to-rose-600",
    "from-emerald-400 via-teal-500 to-green-600",
    "from-pink-500 via-fuchsia-500 to-purple-600",
    "from-sky-500 via-blue-500 to-indigo-600",
    "from-yellow-400 via-orange-500 to-red-500",
    "from-purple-500 via-indigo-500 to-blue-500",
    "from-teal-400 via-cyan-500 to-sky-500",
    "from-red-500 via-pink-500 to-rose-600",
    "from-emerald-400 via-teal-500 to-green-600",
    "from-yellow-400 via-orange-500 to-red-500",
    "from-purple-500 via-indigo-500 to-blue-500",
    "from-teal-400 via-cyan-500 to-sky-500",
    "from-red-500 via-pink-500 to-rose-600",
  ];

  return colors[i % colors.length];
};
