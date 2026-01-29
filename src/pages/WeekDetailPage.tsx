import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { ChildAvatar } from '../components/avatar/ChildAvatar';
import { PentagonChart } from '../components/stats/PentagonChart';
import { TrendCard } from '../components/trend/TrendCard';
import { HashtagList } from '../components/insight/HashtagList';
import { SeasonInsightCard } from '../components/insight/SeasonInsightCard';
import { ParentActionCard } from '../components/insight/ParentActionCard';
import { useChildData } from '../contexts/ChildDataContext';
import { formatFullWeekTitle } from '../utils/dateUtils';

export function WeekDetailPage() {
  const { weekStart } = useParams<{ weekStart: string }>();
  const navigate = useNavigate();
  const { getReportByWeekStart } = useChildData();

  const report = weekStart ? getReportByWeekStart(weekStart) : undefined;

  if (!report) {
    return (
      <div className="py-6 px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-purple-600 mb-4"
        >
          <ChevronLeft size={20} />
          <span>뒤로</span>
        </button>
        <p className="text-gray-500 text-center">
          해당 주차의 데이터를 찾을 수 없습니다.
        </p>
      </div>
    );
  }

  const { child, stats, trends, insights } = report;

  return (
    <div>
      <div className="flex items-center gap-2 py-4 px-4 border-b border-gray-100">
        <button
          onClick={() => navigate(-1)}
          className="p-1 text-gray-400 hover:text-purple-600"
        >
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-base font-semibold text-gray-800">
          {formatFullWeekTitle(stats.weekStart)}
        </h2>
      </div>

      <div className="grid grid-cols-5 gap-4 px-4 py-8 min-h-[320px]">
        <div className="col-span-2 flex flex-col gap-6">
          <ChildAvatar
            name={child.name}
            grade={child.grade}
            age={child.age}
            size="md"
          />

          <div className="border-t border-gray-200 pt-4">
            <TrendCard trends={trends} />
          </div>
        </div>

        <div className="col-span-3 flex flex-col border-l border-gray-200 pl-4">
          <div
            className="flex flex-wrap gap-1.5 mb-16 opacity-0 animate-fade-in"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            <HashtagList tags={insights.hashtags} maxVisible={4} />
          </div>

          <div className="flex-1 flex items-center justify-center">
            <PentagonChart stats={stats} size="lg" />
          </div>
        </div>
      </div>

      <SeasonInsightCard
        insight={insights.seasonInsight}
        childName={child.name}
      />

      <div className="my-6" />

      <ParentActionCard
        actionIds={insights.parentActions}
        childName={child.name}
      />
    </div>
  );
}
