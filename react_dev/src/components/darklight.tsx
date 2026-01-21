// components/ThemeToggle.jsx - FIXED VERSION
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saver = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = saver === "dark" || (!saver && prefersDark) ? "dark" : "light";
    
    setIsDark(initialTheme === "dark");
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = ! isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-2 z-50 p-3 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 glass-hover border border-transparent"
      style={{
        background: isDark 
          ? "linear-gradient(135deg, rgba(15,15,15,0.95), rgba(20,20,30,0.95))"
          : "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))"
      }}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <div 
          className="absolute inset-0 rounded-full transition-all duration-500"
          style={{
            background: isDark 
              ? "linear-gradient(90deg, #00ffff, #9333ea)"
              : "#d1d5db"
          }}
        />
        <div
          className="relative w-5 h-5 rounded-full shadow-lg transition-all duration-500 flex items-center justify-center"
          style={{
            transform: isDark ? "translateX(12px)" : "translateX(0)",
            background: isDark ? "#00ffff" : "#ffffff",
            boxShadow: isDark ? "0 0 20px #00ffff" : "0 0 8px rgba(0,0,0,0.2)"
          }}
        >
          {isDark ? "🌞" : "🌙"}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
