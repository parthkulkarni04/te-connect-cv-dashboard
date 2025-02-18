"use client";

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const LearningDevelopmentCard = ({ data }) => {
  const learning = data?.learning_development_tracking;
  
  if (!learning) return <p>Information not available</p>;
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-orange-700">Learning & Development</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-amber-800 mb-1">Current Focus Areas</h4>
            {learning.current_focus && learning.current_focus.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {learning.current_focus.map((focus, i) => (
                  <span
                    key={i}
                    className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            ) : (
              <p>No current focus areas specified</p>
            )}
          </div>
          
          <div>
            <h4 className="font-medium text-amber-800 mb-1">Recommended Skills</h4>
            {learning.recommended_skills && learning.recommended_skills.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {learning.recommended_skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p>No skill recommendations available</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningDevelopmentCard;