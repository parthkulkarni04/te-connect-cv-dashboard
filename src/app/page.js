"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Welcome from '@/components/Welcome';
import CandidateDashboard from '@/components/CandidateDashboard';
import { colors } from '@/lib/colors';

export default function Home() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        // Try to fetch candidates from resume_1.json, resume_2.json, etc.
        const candidateData = [];
        let index = 1;
        let hasMore = true;
        
        while (hasMore) {
          try {
            const response = await fetch(`/resume_${index}.json`);
            if (response.ok) {
              const data = await response.json();
              candidateData.push(data);
              index++;
            } else {
              hasMore = false;
            }
          } catch (err) {
            hasMore = false;
          }
        }
        
        setCandidates(candidateData);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-amber-50">
        <p className="text-orange-600 text-lg">Loading candidates...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-amber-50" style={{ color: colors.text }}>
      <Sidebar 
        candidates={candidates} 
        setSelectedCandidate={setSelectedCandidate}
        selectedCandidate={selectedCandidate}
      />
      <main className="flex-1 overflow-auto">
        {selectedCandidate ? (
          <CandidateDashboard data={selectedCandidate} />
        ) : (
          <Welcome />
        )}
      </main>
    </div>
  );
}