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
      
    </div>
  );
};
export default ZoomIn;