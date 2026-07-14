import { useMemo, useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

interface CardData {
  title: string;
  description: string;
  index: string;
}

const cards: CardData[] = [
  {
    title: "",
    description: "",
    index: "0/6",
  },
  {
    title: "Full Stack Developer",
    description: "Hello! I'm Bharath Goda, an aspiring software developer with a passion for building efficient, scalable, and user-centric web applications. I recently completed my B.Sc. in Life Sciences from Osmania University and transitioned into software development through self-learning and hands-on projects. I have practical experience with Python, Django, React, SQL, JavaScript, and REST APIs. I enjoy solving real-world problems, exploring new technologies, and continuously improving my technical skills. I am currently seeking an entry-level software development role where I can contribute, Eager to learn, and grow into a skilled full-stack engineer.",
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
  const containerRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 20,
    damping: 2,
    mass: 0.25,
    restDelta: 0.0001,
  });

  const progress = shouldReduceMotion ? scrollYProgress : smoothProgress;

  const progressValues = useMemo(
    () =>
      cards.map((_, index) => ({
        translateY: useTransform(progress, (value) => {
          const cardProgress = value * cards.length - index;
          const isPast = cardProgress > 1;
          return isPast ? -150 : index * 15 - value * cards.length * 1;
        }),
        scale: useTransform(progress, (value) => {
          const cardProgress = value * cards.length - index;
          const isPast = cardProgress > 1;
          return isPast ? 0.9 : 1 - Math.max(0, index - value * cards.length) * 0.02;
        }),
        opacity: useTransform(progress, (value) => {
          const cardProgress = value * cards.length - index;
          return cardProgress > 1 ? 0 : 1;
        }),
      })),
    [progress]
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative bg-black text-orange-400"
      style={{ height: `${cards.length * 42}vh` }}
    >
      <motion.div
        className="h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold absolute top-110">
          What I <span className="text-cyan-400  ">Bring</span>
        </h2>
      </motion.div>

      <div className="sticky top-0 h-screen flex items-center justify-center">
        {cards.map((card, index) => (
          <motion.div
            key={card.title || index}
            className="absolute w-[850px] h-[380px] gap-12 rounded-3xl  bg-white p-10  shadow-2xl transition-all duration-700"
            style={{
              translateY: progressValues[index].translateY,
              scale: progressValues[index].scale,
              opacity: progressValues[index].opacity,
              zIndex: cards.length - index,
            }}
          >
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <p className="text-sm text-black leading-relaxed">{card.description}</p>
            <p className="absolute bottom-6 right-8 text-xs text-gray-400 font-mono">
              {card.index}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;