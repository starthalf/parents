import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { GrowthTrend } from '../../data/types';

interface TrendCardProps {
  trends: GrowthTrend[];
}

export function TrendCard({ trends }: TrendCardProps) {
  return (
    <div className="h-full flex flex-col justify-center">
      {/* 헤더 영역 */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="p-1 bg-purple-100 rounded-md">
          <TrendingUp size={14} className="text-purple-600" />
        </div>
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
          이번 주 성장세
        </span>
      </div>

      {/* 2x2 그리드 레이아웃 */}
      <div className="grid grid-cols-2 gap-2">
        {trends.map((item, index) => {
          // ✅ 핵심 수정: 데이터의 진짜 이름인 'changePercent'와 'trend'를 사용합니다.
          const { subject, trend, changePercent } = item;
          
          // 스타일 설정 변수
          let styles = {
            bg: 'bg-gray-50',
            border: 'border-transparent',
            text: 'text-gray-400',
            icon: Minus,
            displayValue: '0%'
          };

          // trend 값('up', 'down', 'stable')에 따라 스타일 분기
          if (trend === 'up') {
            styles = {
              bg: 'bg-white',
              border: 'border-green-100',
              text: 'text-green-600',
              icon: TrendingUp,
              displayValue: `+${changePercent}%`
            };
          } else if (trend === 'down') {
            styles = {
              bg: 'bg-white',
              border: 'border-red-100',
              text: 'text-red-500',
              icon: TrendingDown,
              displayValue: `${changePercent}%` // 데이터에 이미 -가 포함되어 있음
            };
          } else {
            styles = {
              bg: 'bg-gray-50',
              border: 'border-transparent',
              text: 'text-gray-400',
              icon: Minus,
              displayValue: '-'
            };
          }

          return (
            <div
              key={subject}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all shadow-sm animate-fade-in ${styles.bg} ${styles.border}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-xs text-gray-500 mb-1">{subject}</span>
              
              <div className={`flex items-center gap-1 font-bold text-sm ${styles.text}`}>
                <styles.icon size={12} strokeWidth={3} />
                <span>{styles.displayValue}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}