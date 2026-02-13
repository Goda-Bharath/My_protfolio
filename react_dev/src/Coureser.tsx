import { useEffect, useRef } from "react";

function Coureser() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mouse = { x: 0, y: 0 };
    let pos = { x: 0, y: 0 };
    let trailPos = { x: 0, y: 0 };

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      pos.x += (mouse.x - pos.x) * 0.25;
      pos.y += (mouse.y - pos.y) * 0.25;
      trailPos.x += (mouse.x - trailPos.x) * 0.08;
      trailPos.y += (mouse.y - trailPos.y) * 0.08;
      const speedX = mouse.x - pos.x;
      const speedY = mouse.y - pos.y;
      const stretch = Math.min(
        Math.sqrt(speedX * speedX + speedY * speedY) / 40,
        0.6
      );

      if (mainRef.current) {
        mainRef.current.style.transform = `
          translate(${pos.x}px, ${pos.y}px)
          translate(-50%, -50%)
          scale(${1 + stretch}, ${1 - stretch})
        `;
      }

      if (trailRef.current) {
        trailRef.current.style.transform = `
          translate(${trailPos.x}px, ${trailPos.y}px)
          translate(-50%, -50%)
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>

      <svg className="absolute w-0 h-0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 30 -12
            "
          />
        </filter>
      </svg>
      <div className="absolute inset-0 pointer-events-none z-10 filter-[url(#goo)]">
        <div
          ref={mainRef}
          className="absolute w-42 h-42 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 rounded-full opacity-90"
        />
        <div
          ref={trailRef}
          className="absolute w-20 h-20 bg-yellow-300 rounded-full opacity-70"
        />
      </div>
    </>
  );
}

export default Coureser;
