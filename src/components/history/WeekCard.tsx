import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { PentagonChart } from '../stats/PentagonChart';
import { Tag } from '../ui/Tag';
import type { WeeklyReport } from '../../data/types';
import { formatWeekTitle, formatWeekRange } from '../../utils/dateUtils';

interface WeekCardProps {
  report: WeeklyReport;
  index: number;
}

export function WeekCard({ report, index }: WeekCardProps) {
  const navigate = useNavigate();
  const weekTitle = formatWeekTitle(report.stats.weekStart);
  const weekRange = formatWeekRange(report.stats.weekStart);

  const handleClick = () => {
    navigate(`/week/${report.stats.weekStart}`);
  };

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow opacity-0 animate-slide-in-up"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      <div onClick={handleClick} className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <PentagonChart stats={report.stats} size="sm" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800">
            {weekTitle}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{weekRange}</p>
          <div className="flex gap-1">
            <span className="text-xs text-gray-600">
              몰입 {report.stats.focus}
            </span>
            <span className="text-xs text-gray-400">|</span>
            <span className="text-xs text-gray-600">
              에너지 {report.stats.energy}
            </span>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {report.insights.hashtags.slice(0, 2).map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
        <ChevronRight size={20} className="text-gray-400 flex-shrink-0" />
      </div>
    </Card>
  );
}
