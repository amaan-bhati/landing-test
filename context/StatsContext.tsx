"use client"
import React, { createContext, useContext } from 'react';
import { useVSCodeInstalls } from '@/hooks/useVscodeInstall';
import { useGithubStars } from '@/hooks/useGithubStars';

interface StatsContextType {
  vscodeInstalls: string;
  githubStars: string;
}

const StatsContext = createContext<StatsContextType | undefined>(undefined);

export function StatsProvider({ children }: { children: React.ReactNode }) {
  const vscodeInstalls = useVSCodeInstalls();
  const githubStars = useGithubStars();
  
  const value = {
    vscodeInstalls,
    githubStars,
  };

  return (
    <StatsContext.Provider value={value}>
      {children}
    </StatsContext.Provider>
  );
}


export function useStats() {
    const context = useContext(StatsContext);
    if (context === undefined) {
      throw new Error('useStats must be used within a StatsProvider');
    }
    return context;
}