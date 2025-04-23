import { PiArrowArcRightBold } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const Heading = ({ title, size = "text-3xl", arrow = true }) => {

  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({ x: 12, y: 5, rotate: 30 });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({ x: 0, y: 0, rotate: 0 });
  };

  return (
    <h1 
      className={`my-12 ${size} ${isHovered && arrow ? 'text-accent' : ''} font-hardcore leading-none text-center`}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {title}
      {arrow ? (
        <motion.span
          className="inline-block"
          animate={controls}
          transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
        >
          <PiArrowArcRightBold className="ml-4 inline-block rotate-[30deg]" />
        </motion.span>
      ) : ""}
      
    </h1>
  );
}

export default Heading;