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
    // Scroll to top / home section
    window.scrollTo({
      top: 0,
      behavior:"smooth",
    });
  };

  return (
    <div
      onClick={scrollToHome}
      className="
        fixed bottom-41 right-7 z-50
        cursor-pointer
        hover:scale-110 transition
      "
      aria-label="Scroll to top"
    >
      <svg width="60" height="59" className="rotate-[-90deg]">
        <circle
          cx="30"
          cy="30"
          r="26"
          stroke="rgb(255, 255, 255)"
          strokeWidth="4"
          fill="none"
        />

        {/* Progress circle */}
        <circle
          cx="30"
          cy="30"
          r="26"
          stroke="#f15800"
          strokeWidth="4"
          fill="none"
          strokeDasharray={2 * Math.PI * 26}
          strokeDashoffset={
            2 * Math.PI * 26 * (1 - progress / 100)
          }
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ScrollProgress;
