import React from 'react';
import { motion } from 'framer-motion';
// AnimatedHeading component for creating vibrant, playful headings
export const AnimatedHeading = ({ children, color = 'gradient', size = 'large', className = '', ...props }) => {
  // Define size classes
  const sizeClasses = {
    small: 'text-xl md:text-2xl',
    medium: 'text-2xl md:text-3xl',
    large: 'text-3xl md:text-4xl',
    xlarge: 'text-4xl md:text-5xl'
  };
  // Define color classes
  const colorStyles = {
    gradient: {
      background: 'linear-gradient(135deg, var(--color-trupaste-green), var(--color-trupaste-orange))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textFillColor: 'transparent'
    },
    green: { color: 'var(--color-trupaste-green)' },
    orange: { color: 'var(--color-trupaste-orange)' },
    yellow: { color: 'var(--color-food-truck-yellow)' },
    pink: { color: 'var(--color-buon-pink)' },
    blue: { color: 'var(--color-craft-blue)' }
  };
  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.275] // Bounce effect
      }
    }
  };
  return (
    <motion.h2
      className={`font-bold ${sizeClasses[size]} ${className}`}
      style={colorStyles[color]}
      initial="hidden"
      animate="visible"
      variants={headingVariants}
      {...props}
    >
      {children}
    </motion.h2>
  );
};
// AnimatedText component for paragraph text with subtle animations
export const AnimatedText = ({ children, delay = 0, className = '', ...props }) => {
  return (
    <motion.p
      className={`leading-relaxed ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          delay: delay,
          ease: 'easeOut'
        }
      }}
      {...props}
    >
      {children}
    </motion.p>
  );
};
// AnimatedSpan for inline text highlights
export const AnimatedSpan = ({ children, color = 'green', className = '', ...props }) => {
  const colorClasses = {
    green: 'text-[var(--color-trupaste-green)]',
    orange: 'text-[var(--color-trupaste-orange)]',
    yellow: 'text-[var(--color-food-truck-yellow)]',
    pink: 'text-[var(--color-buon-pink)]',
    blue: 'text-[var(--color-craft-blue)]'
  };
  return (
    <motion.span
      className={`font-bold ${colorClasses[color]} ${className}`}
      whileHover={{ scale: 1.05 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};
export default { AnimatedHeading, AnimatedText, AnimatedSpan };