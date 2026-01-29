import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer
} from 'recharts';
import type { WeeklyStats } from '../../data/types';
import { statsToChartData } from '../../utils/statUtils';

interface PentagonChartProps {
  stats: WeeklyStats;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: 120,
  md: 220,
  lg: 280,
  xl: 340 // ✅ 실제 크기를 키움 (scale 아님)
};

interface CustomTickProps {
  x: number | string;
  y: number | string;
  payload: { value: string };
  data: { subject: string; value: number }[];
  size: 'sm' | 'md' | 'lg' | 'xl';
}

function CustomTick({ x, y, payload, data, size }: CustomTickProps) {
  const item = data.find((d) => d.subject === payload.value);
  const value = item?.value ?? 0;

  const fontSize = size === 'sm' ? 9 : size === 'xl' ? 13 : size === 'lg' ? 12 : 11;
  const valueFontSize = size === 'sm' ? 10 : size === 'xl' ? 18 : size === 'lg' ? 16 : 14;
  const valueOffset = size === 'sm' ? 12 : size === 'xl' ? 24 : size === 'lg' ? 18 : 16;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        textAnchor="middle"
        fill="#6B7280"
        fontSize={fontSize}
        fontWeight={500}
      >
        {payload.value}
      </text>
      <text
        x={0}
        y={valueOffset}
        textAnchor="middle"
        fill="#7C3AED"
        fontSize={valueFontSize}
        fontWeight={700}
      >
        {value}
      </text>
    </g>
  );
}

export function PentagonChart({ stats, size = 'md' }: PentagonChartProps) {
  const data = statsToChartData(stats);
  const chartSize = sizeMap[size];

  return (
    <div className="flex flex-col items-center w-full"> 
      
      {/* ✅ 텍스트 위치 수정: absolute 제거하고 정직하게 상단 배치 */}
      {/* w-full과 text-left로 왼쪽 정렬 */}
      <div className="w-full text-left pl-2 mb-4">
         <h3 className="text-sm font-bold text-gray-700">Learning Agility</h3>
      </div>

      {/* 차트 영역 */}
      <div
        className="animate-draw-chart"
        style={{ width: chartSize, height: chartSize }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} cx="50%" cy="50%" outerRadius="65%">
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
        </ResponsiveContainer>
      </div>
    </div>
  );
}