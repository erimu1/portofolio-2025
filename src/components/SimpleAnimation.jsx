import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/SimpleAnimation.css';

const SimpleAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const shapes = [
    { type: 'circle', color: 'blue', size: 70, delay: 0 },
    { type: 'square', color: 'green', size: 60, delay: 0.15 },
    { type: 'triangle', color: 'orange', size: 55, delay: 0.3 },
    { type: 'hexagon', color: 'purple', size: 65, delay: 0.45 },
    { type: 'diamond', color: 'red', size: 50, delay: 0.6 },
    { type: 'star', color: 'cyan', size: 45, delay: 0.75 }
  ];

  return (
    <section className="simple-animation-section" ref={ref}>
      <div className="container">
        <motion.div
          className="floating-shapes"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {shapes.map((shape, i) => (
            <motion.div
              key={i}
              className={`shape shape-${shape.type} color-${shape.color}`}
              style={{ '--size': `${shape.size}px` }}
              initial={{ 
                scale: 0, 
                rotate: 0,
                y: 20,
                opacity: 0
              }}
              animate={isInView ? { 
                scale: 1, 
                rotate: shape.type === 'square' ? 45 : 360,
                y: [0, -15, 0],
                opacity: 1
              } : { 
                scale: 0, 
                rotate: 0,
                y: 20,
                opacity: 0
              }}
              transition={{
                duration: 1.5,
                delay: shape.delay,
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: shape.delay + 1.5
                },
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: shape.delay + 1.5
                }
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            />
          ))}
        </motion.div>
        
        {/* Subtle background particles */}
        <div className="background-particles">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0 }}
              animate={isInView ? {
                opacity: [0, 0.3, 0],
                scale: [0.5, 1, 0.5],
                x: Math.sin(i) * 100,
                y: Math.cos(i) * 80
              } : { opacity: 0 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.3 + 2
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleAnimation;
