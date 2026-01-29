import { Card } from '../ui/Card';
import { StatDots } from './StatDots';
import type { WeeklyStats } from '../../data/types';
import { statOrder } from '../../utils/statUtils';

interface StatCardProps {
  stats: WeeklyStats;
}

export function StatCard({ stats }: StatCardProps) {
  return (
    <Card>
      <div className="space-y-1">
        {statOrder.map((key, index) => (
          <StatDots
            key={key}
            statKey={key}
            value={stats[key]}
            animationDelay={300 + index * 100}
          />
        ))}
      </div>
    </Card>
  );
}
