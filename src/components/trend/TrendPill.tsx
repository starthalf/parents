import type { GrowthTrend } from '../../data/types';

interface TrendPillProps extends GrowthTrend {
  animationDelay?: number;
}

export function TrendPill({
  subject,
  trend,
  changePercent,
  animationDelay = 0
}: TrendPillProps) {
  const trendConfig = {
    up: {
      text: 'text-emerald-600',
      arrow: '↗',
      sign: '+'
    },
    down: {
      text: 'text-red-500',
      arrow: '↘',
      sign: ''
    },
    stable: {
      text: 'text-gray-400',
      arrow: '→',
      sign: ''
    }
  };

  const config = trendConfig[trend];
  const percentText = trend === 'stable' ? '0%' : `${config.sign}${Math.abs(changePercent)}%`;

  return (
    <div
      className="flex justify-between items-center py-1.5 opacity-0 animate-slide-in-left"
      style={{ animationDelay: `${animationDelay}ms`, animationFillMode: 'forwards' }}
    >
      <span className="text-sm text-gray-600">{subject}</span>
      <span className={`text-sm font-medium ${config.text}`}>
        {config.arrow} {percentText}
      </span>
    </div>
  );
}
