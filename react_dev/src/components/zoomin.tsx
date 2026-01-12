import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Arrow function syntax
const ZoomIn: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,  
      easing: "ease-out",
    });
    AOS.refresh();
  },[]);
  return (
    <div>
      {/* Example usage */}
      <section className="bg-black"
      >
       <h1 className="text-white py-20 px-4"
        data-aos="zoom-in">Thank You</h1>
      </section>
    </div>
  );
};
export default ZoomIn;