interface SeasonInsightCardProps {
  insight: string;
  childName: string;
}

export function SeasonInsightCard({ insight, childName }: SeasonInsightCardProps) {
  return (
    <div
      className="py-6 px-4 opacity-0 animate-fade-in"
      style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-base">🔮</span>
        <h3 className="text-sm font-semibold text-gray-700">
          이번 주 {childName}는요
        </h3>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{insight}</p>
    </div>
  );
}
