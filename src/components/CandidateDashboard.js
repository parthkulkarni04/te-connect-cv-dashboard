"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ExecutiveSummaryCard from './ExecutiveSummaryCard';
import SkillsRadarChart from './SkillsRadarChart';
import RoleFitCard from './RoleFitCard';
import StrengthWeaknessCard from './StrengthWeaknessCard';
import LearningDevelopmentCard from './LearningDevelopmentCard';
import CareerProgressionCard from './CareerProgressionCard';
import DetailedSkillsCard from './DetailedSkillsCard';
import TimelineCard from './TimelineCard';
import HRInsightsCard from './HRInsightsCard';

const CandidateDashboard = ({ data }) => {
  if (!data) return <p>No data available</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
    >
      <ExecutiveSummaryCard data={data} />
      <SkillsRadarChart data={data} />
      <RoleFitCard data={data} />
      <StrengthWeaknessCard data={data} />
      <LearningDevelopmentCard data={data} />
      <CareerProgressionCard data={data} />
      <DetailedSkillsCard data={data} />
      <TimelineCard data={data} />
      <HRInsightsCard data={data} />
    </motion.div>
  );
};

export default CandidateDashboard;
