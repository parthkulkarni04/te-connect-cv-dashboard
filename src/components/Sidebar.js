"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = ({ candidates, setSelectedCandidate, selectedCandidate }) => {
  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-64 bg-amber-50 p-4 shadow-lg overflow-y-auto"
    >
      <h2 className="text-lg font-bold mb-4 text-amber-800">Candidates</h2>
      <ul>
        {candidates.map((candidate, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedCandidate(candidate)}
            className={`p-2 mb-2 rounded cursor-pointer transition-colors ${
              selectedCandidate && selectedCandidate.executive_summary?.name === candidate.executive_summary?.name
                ? 'bg-orange-200 text-orange-800'
                : 'hover:bg-orange-100'
            }`}
          >
            {candidate.executive_summary?.name || `Candidate ${index + 1}`}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Sidebar;