import { useEffect } from 'react';
import { useChildData } from '../contexts/ChildDataContext';

export function useWeekNavigation() {
  const {
    currentReport,
    goToPreviousWeek,
    goToNextWeek,
    canGoNext,
    canGoPrevious
  } = useChildData();

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && canGoPrevious) {
          goToPreviousWeek();
        } else if (diff < 0 && canGoNext) {
          goToNextWeek();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [canGoNext, canGoPrevious, goToNextWeek, goToPreviousWeek]);

  return {
    currentReport,
    goToPreviousWeek,
    goToNextWeek,
    canGoNext,
    canGoPrevious
  };
}
