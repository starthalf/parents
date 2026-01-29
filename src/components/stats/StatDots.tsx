import type { StatKey } from '../../data/types';
import { statLabels } from '../../data/types';
import { valueToDots } from '../../utils/statUtils';

interface StatDotsProps {
  statKey: StatKey;
  value: number;
  showValue?: boolean;
  animationDelay?: number;
}

export function StatDots({
  statKey,
  value,
  showValue = true,
  animationDelay = 0
}: StatDotsProps) {
  const filledDots = valueToDots(value);
  const label = statLabels[statKey];

  return (
    <div
      className="flex items-center justify-between py-2 opacity-0 animate-slide-in-left"
      style={{ animationDelay: `${animationDelay}ms`, animationFillMode: 'forwards' }}
    >
      <span className="text-sm text-gray-700 w-24 font-medium">{label}</span>
      <div className="flex gap-1.5 flex-1 justify-center">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              dot <= filledDots ? 'bg-purple-500' : 'bg-purple-100'
            }`}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-sm font-semibold text-gray-800 w-8 text-right">
          {value}
        </span>
      )}
    </div>
  );
}
