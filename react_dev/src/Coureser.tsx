import { useEffect } from "react";

function Coureser() {

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const cursor = document.getElementById("neon-cursor");
      if (!cursor) return;

      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="neon-cursor"
      className="
        fixed top-0 left-0
        w-8 h-8 rounded-full
        -translate-x-1/2 -translate-y-1/2
        pointer-events-none
        mix-blend-screen
        opacity-60
        animate-pulse
        z-[9999]

        bg-[radial-gradient(circle_at_center,#00fff2_0%,#7a00ff_40%,#13002b_90%)]
      "
    />
  );
}
export default Coureser;
