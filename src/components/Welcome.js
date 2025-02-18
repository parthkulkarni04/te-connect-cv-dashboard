"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-full flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
        className="text-4xl font-bold text-orange-600 mb-4"
      >
        Welcome to TE Connectivity Resumes Dashboard
      </motion.h1>
      <motion.p
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 50 }}
        className="text-xl text-amber-700 text-center max-w-md"
      >
        Select a candidate from the sidebar to view their detailed profile
      </motion.p>
    </motion.div>
  );
};

export default Welcome;