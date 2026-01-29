import { useState } from 'react';
import { parentActionCards } from '../../data/types';

interface ParentActionCardProps {
  actionIds: string[];
  childName: string;
}

export function ParentActionCard({ actionIds, childName }: ParentActionCardProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const availableActions = parentActionCards.filter(card => actionIds.includes(card.id));
  const selectedAction = parentActionCards.find(card => card.id === selectedId);

  const handleCardClick = (id: string) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className="pt-6 border-t border-gray-200">
      <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2 px-4">
        <span className="text-base">💡</span>
        이번 주 {childName}에게
      </h3>

      <div className="flex flex-wrap gap-3 justify-center px-4">
        {availableActions.map((action, index) => (
          <div key={action.id} className="relative">
            {/* 말풍선 (Tooltip) */}
            {selectedId === action.id && selectedAction && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-10 animate-scale-in">
                <div className="bg-gray-800/95 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap max-w-[200px] text-center shadow-xl">
                  <p>{selectedAction.desc}</p>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-800/95" />
                </div>
              </div>
            )}

            {/* 액션 버튼 */}
            <button
              onClick={() => handleCardClick(action.id)}
              className={`
                w-14 h-14 rounded-2xl flex flex-col items-center justify-center gap-0.5
                opacity-0 animate-pop-in transition-all duration-200
                ${selectedId === action.id
                  ? 'bg-purple-50 ring-2 ring-purple-500 shadow-none translate-y-0.5' // 선택됨: 눌린 느낌 + 보라색 링
                  : 'bg-white border border-gray-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-lg' // 기본: 흰색 + 그림자(볼록)
                }
              `}
              style={{
                animationDelay: `${index * 80}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <span className="text-xl filter drop-shadow-sm">{action.emoji}</span>
              <span className={`text-[10px] font-medium ${selectedId === action.id ? 'text-purple-700' : 'text-gray-500'}`}>
                {action.label}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}