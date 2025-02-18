"use client";

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const CareerProgressionCard = ({ data }) => {
  const career = data?.career_progression;
  
  if (!career) return <p>Information not available</p>;
  
  return (
    <Card className="h-full overflow-auto">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-orange-700">Career Progression</CardTitle>
      </CardHeader>
      <CardContent>
        {career.education && career.education.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-amber-800 mb-2">Education</h4>
            {career.education.map((edu, i) => (
              <div key={i} className="mb-2 pl-2 border-l-2 border-orange-200">
                <p className="font-medium">{edu.degree || edu.level}</p>
                <p className="text-sm">{edu.institute}</p>
                <p className="text-sm">{edu.cgpa ? `CGPA: ${edu.cgpa}` : edu.score ? `Score: ${edu.score}` : ""}</p>
              </div>
            ))}
          </div>
        )}
        
        {career.projects && career.projects.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-amber-800 mb-2">Projects</h4>
            {career.projects.map((project, i) => (
              <div key={i} className="mb-2 pl-2 border-l-2 border-orange-200">
                <p className="font-medium">{project.title}</p>
                {project.technologies && (
                  <p className="text-sm">{project.technologies.join(", ")}</p>
                )}
                <p className="text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        )}
        
        {career.extracurricular && career.extracurricular.length > 0 && (
          <div>
            <h4 className="font-semibold text-amber-800 mb-2">Extracurricular</h4>
            {career.extracurricular.map((activity, i) => (
              <div key={i} className="mb-2 pl-2 border-l-2 border-orange-200">
                <p className="font-medium">{activity.role}</p>
                <p className="text-sm">{activity.organization}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CareerProgressionCard;