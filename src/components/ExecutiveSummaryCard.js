"use client";

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const ExecutiveSummaryCard = ({ data }) => {
  const summary = data?.executive_summary;
  
  if (!summary) return <p>Information not available</p>;
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-orange-700">Executive Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-bold mb-2">{summary.name || "N/A"}</h3>
        <p className="mb-1"><span className="font-medium">Education:</span> {summary.education || "N/A"}</p>
        <p className="mb-1"><span className="font-medium">Experience:</span> {summary.experience || "N/A"}</p>
        <p className="mb-1"><span className="font-medium">Career Aspiration:</span> {summary.career_aspiration || "N/A"}</p>
        
        {summary.key_strengths && summary.key_strengths.length > 0 && (
          <>
            <p className="font-medium mt-2 mb-1">Key Strengths:</p>
            <ul className="list-disc pl-5">
              {summary.key_strengths.map((strength, i) => (
                <li key={i}>{strength}</li>
              ))}
            </ul>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ExecutiveSummaryCard;