import type { Child, WeeklyReport } from './types';

export const mockChild: Child = {
  id: '1',
  name: '민지',
  grade: 4,
  age: 10,
  avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=minji&mood=happy'
};

export const mockWeeklyHistory: WeeklyReport[] = [
  {
    child: mockChild,
    stats: {
      weekStart: '2024-12-16',
      focus: 82,
      growthMind: 75,
      comprehension: 78,
      logic: 68,
      energy: 55
    },
    trends: [
      { subject: '국어', trend: 'up', changePercent: 8 },
      { subject: '수학', trend: 'stable', changePercent: 0 },
      { subject: '영어', trend: 'up', changePercent: 12 },
      { subject: '과학', trend: 'down', changePercent: -5 }
    ],
    insights: {
      weekStart: '2024-12-16',
      hashtags: ['자기발견중', '친구가세상', '충전필요', '칭찬에반응좋음', '꾸준함유지중'],
      parentActions: ['praise', 'trust', 'food', 'touch', 'rest'],
      seasonInsight: '몰입력 좋고 꾸준히 성장 중이에요. 연말이라 에너지 충전이 필요해 보여요'
    }
  },
  {
    child: mockChild,
    stats: {
      weekStart: '2024-12-09',
      focus: 78,
      growthMind: 72,
      comprehension: 75,
      logic: 70,
      energy: 72
    },
    trends: [
      { subject: '국어', trend: 'stable', changePercent: 2 },
      { subject: '수학', trend: 'up', changePercent: 5 },
      { subject: '영어', trend: 'stable', changePercent: 0 },
      { subject: '과학', trend: 'up', changePercent: 3 }
    ],
    insights: {
      weekStart: '2024-12-09',
      hashtags: ['성장중', '친구관계좋음', '집중력상승', '호기심왕'],
      parentActions: ['cheer', 'talk', 'play', 'recognize'],
      seasonInsight: '전반적으로 균형 잡힌 한 주였어요. 수학에서 좋은 모습을 보여주고 있어요.'
    }
  },
  {
    child: mockChild,
    stats: {
      weekStart: '2024-12-02',
      focus: 75,
      growthMind: 68,
      comprehension: 72,
      logic: 65,
      energy: 68
    },
    trends: [
      { subject: '국어', trend: 'up', changePercent: 6 },
      { subject: '수학', trend: 'stable', changePercent: 1 },
      { subject: '영어', trend: 'down', changePercent: -3 },
      { subject: '과학', trend: 'up', changePercent: 7 }
    ],
    insights: {
      weekStart: '2024-12-02',
      hashtags: ['새학기적응', '의욕상승', '과학러버', '책읽기좋아함'],
      parentActions: ['listen', 'outing', 'gift', 'wait'],
      seasonInsight: '국어와 과학에서 성장세가 보여요. 영어는 살짝 어려워하는 것 같아요.'
    }
  },
  {
    child: mockChild,
    stats: {
      weekStart: '2024-11-25',
      focus: 70,
      growthMind: 65,
      comprehension: 70,
      logic: 62,
      energy: 75
    },
    trends: [
      { subject: '국어', trend: 'stable', changePercent: 0 },
      { subject: '수학', trend: 'up', changePercent: 4 },
      { subject: '영어', trend: 'up', changePercent: 5 },
      { subject: '과학', trend: 'stable', changePercent: 2 }
    ],
    insights: {
      weekStart: '2024-11-25',
      hashtags: ['에너지넘침', '수학흥미', '영어도전중', '자신감상승'],
      parentActions: ['praise', 'exercise', 'money', 'alone'],
      seasonInsight: '에너지가 넘치는 한 주였어요! 수학과 영어에 관심을 보이고 있어요.'
    }
  },
  {
    child: mockChild,
    stats: {
      weekStart: '2024-11-18',
      focus: 68,
      growthMind: 62,
      comprehension: 65,
      logic: 60,
      energy: 70
    },
    trends: [
      { subject: '국어', trend: 'up', changePercent: 3 },
      { subject: '수학', trend: 'stable', changePercent: 1 },
      { subject: '영어', trend: 'stable', changePercent: 0 },
      { subject: '과학', trend: 'down', changePercent: -2 }
    ],
    insights: {
      weekStart: '2024-11-18',
      hashtags: ['천천히성장', '꾸준함', '독서습관', '긍정적'],
      parentActions: ['trust', 'talk', 'rest', 'touch'],
      seasonInsight: '천천히 꾸준하게 성장하고 있어요. 독서 습관이 잘 잡혀가고 있네요.'
    }
  }
];

export const mockCurrentWeek: WeeklyReport = mockWeeklyHistory[0];
