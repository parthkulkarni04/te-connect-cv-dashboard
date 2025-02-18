"use client";

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const StrengthWeaknessCard = ({ data }) => {
  const indicators = data?.strength_weakness_indicators;
  
  if (!indicators) return <p>Information not available</p>;
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-orange-700">Strengths & Weaknesses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h4 className="font-semibold text-green-600 mb-2">Strengths</h4>
            {indicators.strengths && indicators.strengths.length > 0 ? (
              <ul className="list-disc pl-5">
                {indicators.strengths.map((strength, i) => (
                  <li key={i}>{strength}</li>
                ))}
              </ul>
            ) : (
              <p>No strengths listed</p>
            )}
          </div>
          
          <div>
            <h4 className="font-semibold text-red-600 mb-2">Areas for Improvement</h4>
            {indicators.weaknesses && indicators.weaknesses.length > 0 ? (
              <ul className="list-disc pl-5">
                {indicators.weaknesses.map((weakness, i) => (
                  <li key={i}>{weakness}</li>
                ))}
              </ul>
            ) : (
              <p>No areas for improvement listed</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StrengthWeaknessCard;