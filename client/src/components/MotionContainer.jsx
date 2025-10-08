// components/MotionContainer.jsx
import { motion } from "framer-motion";

const MotionContainer = ({ children, direction = "left", className = "" }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "top" ? -50 : direction === "bottom" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "top" ? -50 : direction === "bottom" ? 50 : 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;
