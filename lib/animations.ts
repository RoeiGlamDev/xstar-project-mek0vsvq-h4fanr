import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideIn: {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
  },
  scaleUp: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
  },
};

const AnimationWrapper = ({ children, animationType }) => {
  const animation = animations[animationType] || animations.fadeIn; // default to fadeIn
  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      transition={{ duration: 0.5 }} // customize duration as needed
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;