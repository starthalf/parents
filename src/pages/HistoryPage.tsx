import { Calendar } from 'lucide-react';
import { WeekList } from '../components/history/WeekList';
import { useChildData } from '../contexts/ChildDataContext';

export function HistoryPage() {
  const { weeklyReports } = useChildData();

  return (
    <div className="py-6">
      <div className="flex items-center gap-2 mb-6">
        <Calendar size={24} className="text-purple-500" />
        <h1 className="text-xl font-bold text-gray-800">성장 기록</h1>
      </div>

      <WeekList reports={weeklyReports} />
    </div>
  );
}
