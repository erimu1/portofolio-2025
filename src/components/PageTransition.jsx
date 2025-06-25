import React from 'react';
import { motion } from 'framer-motion';
import '../styles/PageTransition.css';
import { pageTransitions } from '../config/animationConfig';
const PageTransition = ({
  children,
  transitionType = 'default',
  customVariants = null,
  customTransition = null,
  className = ''
}) => {
  // Use variants from config or custom variants if provided
  const pageVariants = customVariants || pageTransitions.variants;
  // Select transition based on type or use custom transition if provided
  let pageTransition;
  if (customTransition) {
    pageTransition = customTransition;
  } else if (transitionType === 'default') {
    pageTransition = pageTransitions.transition;
  } else if (pageTransitions.alternatives[transitionType]) {
    pageTransition = pageTransitions.alternatives[transitionType];
  } else {
    // Fallback to default if specified type doesn't exist
    pageTransition = pageTransitions.transition;
  }
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className={`page-transition ${className}`}
    >
      {children}
    </motion.div>
  );
};
export default PageTransition;