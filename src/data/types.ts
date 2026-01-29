export interface Child {
  id: string;
  name: string;
  grade: number;
  age: number;
  avatar: string;
}

export interface WeeklyStats {
  weekStart: string;
  focus: number;
  growthMind: number;
  comprehension: number;
  logic: number;
  energy: number;
}

export interface GrowthTrend {
  subject: string;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
}

export interface ParentAction {
  id: string;
  emoji: string;
  label: string;
  desc: string;
}

export interface Insights {
  weekStart: string;
  hashtags: string[];
  parentActions: string[];
  seasonInsight: string;
}

export interface WeeklyReport {
  child: Child;
  stats: WeeklyStats;
  trends: GrowthTrend[];
  insights: Insights;
}

export type StatKey = 'focus' | 'growthMind' | 'comprehension' | 'logic' | 'energy';

export const statLabels: Record<StatKey, string> = {
  focus: '몰입',
  growthMind: '성장마인드',
  comprehension: '이해력',
  logic: '논리력',
  energy: '에너지'
};

export const statColors: Record<StatKey, string> = {
  focus: '#3B82F6',
  growthMind: '#22C55E',
  comprehension: '#EAB308',
  logic: '#8B5CF6',
  energy: '#F97316'
};

export const parentActionCards: ParentAction[] = [
  { id: 'praise', emoji: '👏', label: '칭찬', desc: '작은 일에도 "잘했어!"라고 말해주세요' },
  { id: 'trust', emoji: '🤗', label: '믿음', desc: '"널 믿어"라는 말이 큰 힘이 돼요' },
  { id: 'recognize', emoji: '💪', label: '인정', desc: '"노력하는 거 알아"라고 알아봐 주세요' },
  { id: 'cheer', emoji: '📣', label: '응원', desc: '"화이팅!" 힘내라는 말이 필요해요' },
  { id: 'listen', emoji: '👂', label: '경청', desc: '말 끊지 말고 끝까지 들어주세요' },
  { id: 'food', emoji: '🍕', label: '음식', desc: '맛있는 간식이나 좋아하는 메뉴를 준비해주세요' },
  { id: 'gift', emoji: '🎁', label: '선물', desc: '작은 선물이 기분 전환에 도움돼요' },
  { id: 'money', emoji: '💰', label: '용돈', desc: '스스로 쓸 수 있는 용돈을 줘보세요' },
  { id: 'talk', emoji: '💬', label: '대화', desc: '10분이라도 오늘 하루 이야기 나눠보세요' },
  { id: 'outing', emoji: '🚗', label: '나들이', desc: '바깥 나들이가 기분 전환에 좋아요' },
  { id: 'play', emoji: '🎮', label: '놀이', desc: '함께 게임하거나 놀아주세요' },
  { id: 'exercise', emoji: '⚽', label: '운동', desc: '같이 몸 움직이는 활동을 해보세요' },
  { id: 'touch', emoji: '🫂', label: '스킨십', desc: '안아주기, 머리 쓰다듬기가 필요해요' },
  { id: 'rest', emoji: '😴', label: '휴식', desc: '오늘은 푹 쉬게 해주세요' },
  { id: 'alone', emoji: '🚪', label: '혼자시간', desc: '혼자만의 시간을 존중해주세요' },
  { id: 'wait', emoji: '⏳', label: '기다림', desc: '재촉하지 말고 기다려주세요' },
];
