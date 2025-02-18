"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const TimelineCard = ({ data }) => {
  const timeline = data?.timeline;
  
  if (!timeline) return <p>Information not available</p>;
  
  // Combine all timeline events and sort them chronologically (assuming year is always present)
  const allEvents = [];
  Object.entries(timeline).forEach(([category, events]) => {
    events.forEach(event => {
      allEvents.push({
        ...event,
        category
      });
    });
  });
  
  // Sort by year (handling strings and numbers)
  const sortedEvents = allEvents.sort((a, b) => {
    const yearA = a.year === 'Current' ? 9999 : parseInt(a.year);
    const yearB = b.year === 'Current' ? 9999 : parseInt(b.year);
    return yearB - yearA; // Descending order (most recent first)
  });
  
  return (
    <Card className="h-full overflow-auto">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-orange-700">Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative pl-6 border-l-2 border-orange-200 space-y-4">
          {sortedEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-4"
            >
              <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-orange-500" />
              <div className="bg-amber-50 p-3 rounded shadow-sm">
                <div className="text-sm font-medium text-amber-800 mb-1">
                  {event.year} · {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </div>
                <p>{event.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimelineCard;