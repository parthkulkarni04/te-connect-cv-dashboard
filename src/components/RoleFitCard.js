"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { colors } from '@/lib/colors';

const RoleFitCard = ({ data }) => {
  const roleFit = data?.role_fit_percentage;
  
  if (!roleFit) return <p>Information not available</p>;
  
  const roleData = Object.entries(roleFit).map(([role, percentage]) => ({
    role,
    percentage,
  }));
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-orange-700">Role Fit Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={roleData} layout="vertical">
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="role" type="category" width={100} tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="percentage" fill={colors.primary} radius={[0, 4, 4, 0]}>
                {roleData.map((entry, index) => (
                  <motion.rect
                    initial={{ width: 0 }}
                    animate={{ width: entry.percentage }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    key={index}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoleFitCard;