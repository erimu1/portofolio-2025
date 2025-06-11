import React from 'react';
import { motion } from 'framer-motion';

// A collection of SVG illustrations to add personality to the website
// These are inspired by the food truck and design elements in the reference image

export const FoodTruckIcon = ({ width = 80, height = 80, className = '' }) => {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      {/* Truck Body */}
      <motion.path 
        d="M10 65H75C78 65 80 63 80 60V30C80 27 78 25 75 25H20C15 25 10 30 10 35V65Z" 
        fill="#4a9e2f"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      {/* Truck Window */}
      <motion.rect x="15" y="35" width="20" height="15" rx="2" fill="#f5f5f5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      {/* Truck Wheels */}
      <motion.circle cx="25" cy="75" r="10" fill="#333"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
      />
      <motion.circle cx="65" cy="75" r="10" fill="#333"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      />
      {/* Food Sign */}
      <motion.rect x="40" y="10" width="30" height="15" rx="2" fill="#ff7a3d"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
      />
      <motion.text x="45" y="21" fontSize="8" fill="white" fontWeight="bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        FOOD
      </motion.text>
    </motion.svg>
  );
};

export const FlowerIcon = ({ width = 60, height = 60, className = '', color = '#ff8fa3' }) => {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ rotate: -10, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      {/* Flower Petals */}
      <motion.path
        d="M50 30C55.5 30 60 25.5 60 20C60 14.5 55.5 10 50 10C44.5 10 40 14.5 40 20C40 25.5 44.5 30 50 30Z"
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
      <motion.path
        d="M70 50C75.5 50 80 45.5 80 40C80 34.5 75.5 30 70 30C64.5 30 60 34.5 60 40C60 45.5 64.5 50 70 50Z"
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
      />
      <motion.path
        d="M50 70C55.5 70 60 65.5 60 60C60 54.5 55.5 50 50 50C44.5 50 40 54.5 40 60C40 65.5 44.5 70 50 70Z"
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
      />
      <motion.path
        d="M30 50C35.5 50 40 45.5 40 40C40 34.5 35.5 30 30 30C24.5 30 20 34.5 20 40C20 45.5 24.5 50 30 50Z"
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
      />
      {/* Flower Center */}
      <motion.circle
        cx="50"
        cy="40"
        r="10"
        fill="#ffcb05"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
      />
    </motion.svg>
  );
};

export const CraftedIcon = ({ width = 70, height = 40, className = '' }) => {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 140 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Background */}
      <motion.rect
        width="140"
        height="80"
        rx="5"
        fill="#ffcb05"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
      />
      {/* Text */}
      <motion.text
        x="20"
        y="45"
        fontSize="18"
        fontWeight="bold"
        fill="#8b4513"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        CRAFTED
      </motion.text>
    </motion.svg>
  );
};

export default { FoodTruckIcon, FlowerIcon, CraftedIcon };