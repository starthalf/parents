import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  // ResponsiveContainer 삭제 (불필요)
} from 'recharts';
import type { WeeklyStats } from '../../data/types';
import { statsToChartData } from '../../utils/statUtils';

// ... (인터페이스 및 CustomTick 코드는 그대로 유지) ...

export function PentagonChart({ stats, size = 'md' }: PentagonChartProps) {
  const data = statsToChartData(stats);
  const chartSize = sizeMap[size];

  return (
    <div className="flex flex-col items-center w-full"> 
      
      <div className="w-full text-left pl-2 mb-4">
         <h3 className="text-sm font-bold text-gray-700">Learning Agility</h3>
      </div>

      {/* 차트 영역 */}
      <div className="animate-draw-chart">
        {/* 🔥 핵심 수정 사항: 
           ResponsiveContainer를 제거하고 RadarChart에 직접 width, height를 줍니다.
           이렇게 하면 부모 div의 애니메이션이나 레이아웃 상태와 상관없이 
           무조건 지정된 크기로 그려지므로 무한 로딩이 발생할 수 없습니다.
        */}
        <RadarChart 
          width={chartSize} 
          height={chartSize} 
          data={data} 
          cx="50%" 
          cy="50%" 
          outerRadius="65%"
        >
          <PolarGrid stroke="#E5E7EB" strokeWidth={1} />
          <PolarAngleAxis
            dataKey="subject"
            tick={(props) => <CustomTick {...props} data={data} size={size} />}
            tickLine={false}
          />
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#EC4899" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <Radar
            name="stats"
            dataKey="value"
            stroke="#7C3AED"
            fill="url(#chartGradient)"
            strokeWidth={2}
          />
        </RadarChart>
      </div>
    </div>
  );
}