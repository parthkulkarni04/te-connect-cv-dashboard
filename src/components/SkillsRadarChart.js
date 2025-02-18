"use client";

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { colors } from '@/lib/colors';

const SkillsRadarChart = ({ data }) => {
  const radarData = data?.skills_assessment?.radar_chart;
  
  if (!radarData) return <p>Information not available</p>;
  
  const formattedData = Object.entries(radarData).map(([name, value]) => ({
    subject: name,
    value,
    fullMark: 10,
  }));
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-orange-700">Skills Assessment</CardTitle>
        <CardDescription>Radar chart of core competencies</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formattedData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: colors.text, fontSize: 10 }} />
              <PolarRadiusAxis domain={[0, 10]} tick={{ fill: colors.text }} />
              <Radar
                name="Skills"
                dataKey="value"
                stroke={colors.primary}
                fill={colors.secondary}
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsRadarChart;