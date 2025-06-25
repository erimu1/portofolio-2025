import { useState } from 'react';
import { motion } from 'framer-motion';
import { uiAnimations } from '../config/animationConfig';
export const useHoverAnimation = (options = {}) => {
  const {
    scale = uiAnimations.buttons.scale,
    duration = uiAnimations.buttons.duration,
    y = 0
  } = options;
  return {
    whileHover: { 
      scale, 
      y,
      transition: { duration } 
    },
    whileTap: { 
      scale: scale * 0.95 
    }
  };
};
export const useStaggeredAnimation = (options = {}) => {
  const {
    staggerDelay = 0.1,
    duration = 0.5,
    distance = 20
  } = options;
  return {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: distance },
      show: { 
        opacity: 1, 
        y: 0,
        transition: { duration } 
      }
    }
  };
};
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    animation = 'fadeUp' // 'fadeUp', 'fadeIn', 'scale', etc.
  } = options;
  const getVariants = () => {
    switch (animation) {
      case 'fadeUp':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        };
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'fadeLeft':
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 }
        };
      case 'fadeRight':
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 }
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };
  return {
    variants: getVariants(),
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: triggerOnce, threshold }
  };
};
export const useCardAnimation = (options = {}) => {
  const {
    lift = uiAnimations.cards.lift,
    duration = uiAnimations.cards.duration,
    shadow = '0 10px 20px rgba(0, 0, 0, 0.1)'
  } = options;
  const [isHovered, setIsHovered] = useState(false);
  return {
    style: {
      transition: `transform ${duration}s ease, box-shadow ${duration}s ease`,
      transform: isHovered ? `translateY(${lift}px)` : 'translateY(0)',
      boxShadow: isHovered ? shadow : '0 2px 4px rgba(0, 0, 0, 0.05)'
    },
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  };
};
export const AnimatedButton = ({ children, className = '', ...props }) => {
  const hoverAnimation = useHoverAnimation();
  return (
    <motion.button
      className={`animated-button ${className}`}
      {...hoverAnimation}
      {...props}
    >
      {children}
    </motion.button>
  );
};
export const AnimatedCard = ({ children, className = '', ...props }) => {
  const cardAnimation = useCardAnimation();
  return (
    <div
      className={`animated-card ${className}`}
      {...cardAnimation}
      {...props}
    >
      {children}
    </div>
  );
};