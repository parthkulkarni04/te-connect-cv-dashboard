"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const DetailedSkillsCard = ({ data }) => {
  const skills = data?.detailed_skills_breakdown;
  
  if (!skills) return <p>Information not available</p>;
  
  const categories = Object.keys(skills);
  
  return (
    <Card className="h-full overflow-auto">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-orange-700">Detailed Skills Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category, i) => (
            <div key={i}>
              <h4 className="font-medium text-amber-800 capitalize mb-2">{category.replace(/_/g, ' ')}</h4>
              <div className="space-y-2">
                {Object.entries(skills[category]).map(([skill, rating]) => (
                  <div key={skill}>
                    <div className="flex justify-between mb-1">
                      <span>{skill}</span>
                      <span className="text-orange-700">{rating}/10</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(rating / 10) * 100}%` }}
                        transition={{ duration: 1 }}
                        className="h-2 rounded-full bg-orange-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailedSkillsCard;