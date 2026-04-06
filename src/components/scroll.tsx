import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      onClick={scrollToHome}
      className="fixed bottom-41 right-7 z-50 cursor-pointer hover:scale-110 transition"
      aria-label="Scroll to top"
    >
      <div className="relative w-[60px] h-[60px] flex items-center justify-center">

        {/* SVG Progress Circle */}
        <svg className="absolute top-0 left-0 rotate-[-90deg]" width="60" height="60">
          {/* Background circle */}
          <circle
            cx="30"
            cy="30"
            r={radius}
            stroke="white"
            strokeWidth="4"
            fill="none"
          />

          {/* Progress circle */}
          <circle
            cx="30"
            cy="30"
            r={radius}
            stroke="#f15800"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress / 100)}
            strokeLinecap="round"
          />
        </svg>
        <span className="text-white text-xl font-bold">
          ↑
        </span>

      </div>
    </div>
  );
};

export default ScrollProgress;
