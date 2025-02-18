"use client";

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const HRInsightsCard = ({ data }) => {
  const insights = data?.hr_dashboard_insights;
  
  if (!insights) return <p>Information not available</p>;
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-orange-700">HR Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {insights.top_skills && insights.top_skills.length > 0 && (
            <div>
              <h4 className="font-medium text-amber-800 mb-1">Top Skills</h4>
              <div className="flex flex-wrap gap-2">
                {insights.top_skills.map((skill, i) => (
                  <span key={i} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {insights.growth_potential && (
            <div>
              <h4 className="font-medium text-amber-800 mb-1">Growth Potential</h4>
              <p>{insights.growth_potential}</p>
            </div>
          )}
          
          {insights.internship_suitability && insights.internship_suitability.length > 0 && (
            <div>
              <h4 className="font-medium text-amber-800 mb-1">Internship Suitability</h4>
              <ul className="list-disc pl-5">
                {insights.internship_suitability.map((position, i) => (
                  <li key={i}>{position}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HRInsightsCard;