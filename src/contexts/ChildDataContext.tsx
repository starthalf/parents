import { createContext, useContext, useState, type ReactNode } from 'react';
import type { WeeklyReport } from '../data/types';
import { mockWeeklyHistory } from '../data/mockData';

interface ChildDataContextType {
  weeklyReports: WeeklyReport[];
  currentWeekIndex: number;
  currentReport: WeeklyReport | null;
  setCurrentWeekIndex: (index: number) => void;
  goToPreviousWeek: () => void;
  goToNextWeek: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  getReportByWeekStart: (weekStart: string) => WeeklyReport | undefined;
}

const ChildDataContext = createContext<ChildDataContextType | null>(null);

export function ChildDataProvider({ children }: { children: ReactNode }) {
  const [weeklyReports] = useState<WeeklyReport[]>(mockWeeklyHistory);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

  const currentReport = weeklyReports[currentWeekIndex] || null;
  const canGoNext = currentWeekIndex > 0;
  const canGoPrevious = currentWeekIndex < weeklyReports.length - 1;

  const goToPreviousWeek = () => {
    if (canGoPrevious) {
      setCurrentWeekIndex((prev) => prev + 1);
    }
  };

  const goToNextWeek = () => {
    if (canGoNext) {
      setCurrentWeekIndex((prev) => prev - 1);
    }
  };

  const getReportByWeekStart = (weekStart: string) => {
    return weeklyReports.find((r) => r.stats.weekStart === weekStart);
  };

  return (
    <ChildDataContext.Provider
      value={{
        weeklyReports,
        currentWeekIndex,
        currentReport,
        setCurrentWeekIndex,
        goToPreviousWeek,
        goToNextWeek,
        canGoNext,
        canGoPrevious,
        getReportByWeekStart
      }}
    >
      {children}
    </ChildDataContext.Provider>
  );
}

export function useChildData() {
  const context = useContext(ChildDataContext);
  if (!context) {
    throw new Error('useChildData must be used within ChildDataProvider');
  }
  return context;
}
