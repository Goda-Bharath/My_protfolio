import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CardData {
  title: string;
  description: string;
  index: string;
}
const cards: CardData[] = [
  {
    title: "Full Stack Developer",
    description: "Hands-on experience with React, Python, Django, and modern web technologies. Building scalable web applications from frontend to backend with real-world internship experience.",
    index: "6/6",
  },
  {
    title: "Backend Development",
    description: "Proficient in REST API development, SQL database management, and Django. Built production-ready APIs and internal dashboards during Skill Capital internship.",
    index: "5/6",
  },
  {
    title: "Internship Experience", 
    description: "Developed web applications, managed databases, and contributed to team projects at Skill Capital. Gained practical experience in debugging, workflows, and collaborative development.",
    index: "4/6",
  },
  {
    title: "Scalable Applications",
    description: "Focus on building efficient, scalable web applications with strong backend foundations. Passionate about creating robust systems that handle real-world demands.",
    index: "3/6",
  },
  {
    title: "Biotech → Tech Transition",
    description: "Biotechnology academic background with self-taught software development mastery. Bridging scientific rigor with engineering excellence through consistent project work.",
    index: "2/6",
  },
  {
    title: "Continuous Growth",
    description: "Entry-level developer eager to join professional teams. Committed to learning from experienced developers while contributing practical skills and fresh perspectives.",
    index: "1/6",
  },
];


const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight =
        containerRef.current.offsetHeight - window.innerHeight;

      if (totalHeight <= 0) return;

      const scrolled = -rect.top;
      const value = Math.min(Math.max(scrolled / totalHeight, 0), 1);
      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef} id="about"
      className="relative bg-black text-orange-400"
      style={{ height: `${cards.length * 100}vh` }}
    >
      {/* Heading Section */}
      <motion.div
        className="h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold absolute top-110">
          What I <span className="text-cyan-400  ">Bring</span>
        </h2>
      </motion.div>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {cards.map((card, index) => {
          const cardProgress = progress * cards.length - index;

          const isPast = cardProgress > 1;

          const translateY = isPast
            ? -200
            : index * 20 - progress * cards.length * 1;

          const scale = isPast
            ? 0.9
            : 1 - Math.max(0, index - progress * cards.length) * 0.05;

          const opacity = isPast ? 0 : 1;

          return (
            <div
              key={card.title}
              className="absolute w-[850px] h-[380px] gap-12 rounded-3xl  bg-white p-10  shadow-2xl transition-all duration-700"
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity,
                zIndex: cards.length - index,
              }}
            >
              <h3 className="text-xl font-semibold mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-black leading-relaxed">
                {card.description}
              </p>
              <p className="absolute bottom-6 right-8 text-xs text-gray-400 font-mono">
                {card.index}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;