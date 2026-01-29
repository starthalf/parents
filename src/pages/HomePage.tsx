import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ChildAvatar } from '../components/avatar/ChildAvatar';
import { PentagonChart } from '../components/stats/PentagonChart';
import { TrendCard } from '../components/trend/TrendCard';
import { HashtagList } from '../components/insight/HashtagList';
import { SeasonInsightCard } from '../components/insight/SeasonInsightCard';
import { ParentActionCard } from '../components/insight/ParentActionCard';
import { useWeekNavigation } from '../hooks/useWeekNavigation';
import { formatFullWeekTitle } from '../utils/dateUtils';

export function HomePage() {
  const {
    currentReport,
    goToPreviousWeek,
    goToNextWeek,
    canGoNext,
    canGoPrevious
  } = useWeekNavigation();

  if (!currentReport) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-gray-400 font-medium animate-pulse">데이터를 불러오는 중...</p>
      </div>
    );
  }

  const { child, stats, trends, insights } = currentReport;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-center relative">
          <span className="font-bold text-gray-800 text-lg">도비종합학원</span>
        </div>
      </header>

      <div className="max-w-md mx-auto px-5 flex flex-col gap-4">
        
        {/* 날짜 이동 컨트롤러 */}
        <div className="flex items-center justify-center gap-6 pt-6 pb-2">
          <button
            onClick={goToPreviousWeek}
            disabled={!canGoPrevious}
            className={`p-2 rounded-full transition-all ${
              canGoPrevious
                ? 'bg-white text-gray-600 shadow-sm hover:text-purple-600 active:scale-95 border border-gray-100'
                : 'text-gray-300'
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-lg font-bold text-gray-800 tracking-tight">
            {formatFullWeekTitle(stats.weekStart)}
          </h2>
          <button
            onClick={goToNextWeek}
            disabled={!canGoNext}
            className={`p-2 rounded-full transition-all ${
              canGoNext
                ? 'bg-white text-gray-600 shadow-sm hover:text-purple-600 active:scale-95 border border-gray-100'
                : 'text-gray-300'
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* 메인 대시보드 카드 */}
        <section className="bg-white rounded-[2rem] p-6 pb-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex flex-col">
            
            {/* 상단: 프로필 + 성장세 */}
            <div className="flex gap-4 mb-6">
              <div className="w-1/3 flex flex-col items-center gap-3 pt-2">
                <ChildAvatar
                  name={child.name}
                  grade={child.grade}
                  age={child.age}
                  size="md"
                />
              </div>
              <div className="w-2/3">
                 <TrendCard trends={trends} />
              </div>
            </div>
            
            <div className="w-full h-px bg-gray-100" />

            {/* 하단: 차트 + 해시태그 (위치 변경됨: 차트 위, 해시태그 아래) */}
            <div className="flex flex-col items-center mt-6 gap-6">
              
              {/* 차트 영역 */}
              <div className="w-full flex justify-center">
                <PentagonChart stats={stats} size="lg" />
              </div>

              {/* 해시태그 영역 (차트 아래로 이동 완료) */}
              <div
                className="w-full flex flex-wrap justify-center gap-2 opacity-0 animate-fade-in"
                style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
              >
                <HashtagList tags={insights.hashtags} maxVisible={4} />
              </div>

            </div>
          </div>
        </section>

        {/* 인사이트 카드 */}
        <section className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <SeasonInsightCard
            insight={insights.seasonInsight}
            childName={child.name}
          />
        </section>

        {/* 액션 카드 (컬러풀한 ParentActionCard 적용) */}
        <section className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <ParentActionCard
            actionIds={insights.parentActions}
            childName={child.name}
          />
        </section>

      </div>
    </div>
  );
}