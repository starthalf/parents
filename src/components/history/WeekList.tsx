import { WeekCard } from './WeekCard';
import type { WeeklyReport } from '../../data/types';
import { groupByMonth, getMonthYear } from '../../utils/dateUtils';

interface WeekListProps {
  reports: WeeklyReport[];
}

export function WeekList({ reports }: WeekListProps) {
  const groupedReports = groupByMonth(
    reports.map((r) => ({ ...r, weekStart: r.stats.weekStart }))
  );

  let globalIndex = 0;

  return (
    <div className="space-y-6">
      {Array.from(groupedReports.entries()).map(([monthYear]) => {
        const monthReports = reports.filter(
          (r) => getMonthYear(r.stats.weekStart) === monthYear
        );

        return (
          <div key={monthYear}>
            <h2 className="text-sm font-medium text-gray-500 mb-3 px-1">
              {monthYear}
            </h2>
            <div className="space-y-3">
              {monthReports.map((report) => {
                const index = globalIndex++;
                return (
                  <WeekCard
                    key={report.stats.weekStart}
                    report={report}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
