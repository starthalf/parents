import type { WeeklyStats, StatKey } from '../data/types';

export function valueToDots(value: number): number {
  if (value <= 20) return 1;
  if (value <= 40) return 2;
  if (value <= 60) return 3;
  if (value <= 80) return 4;
  return 5;
}

export function getAvatarMood(energy: number): 'happy' | 'neutral' | 'sad' {
  if (energy > 70) return 'happy';
  if (energy > 40) return 'neutral';
  return 'sad';
}

export function getBackgroundGradient(energy: number): string {
  if (energy > 70) return 'from-green-100 to-emerald-100';
  if (energy > 40) return 'from-purple-100 to-pink-100';
  return 'from-gray-100 to-slate-100';
}

export function getAvatarUrl(seed: string): string {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
}

export function statsToChartData(stats: WeeklyStats) {
  return [
    { subject: '몰입', value: stats.focus, fullMark: 100 },
    { subject: '성장마인드', value: stats.growthMind, fullMark: 100 },
    { subject: '이해력', value: stats.comprehension, fullMark: 100 },
    { subject: '논리력', value: stats.logic, fullMark: 100 },
    { subject: '에너지', value: stats.energy, fullMark: 100 }
  ];
}

export const statOrder: StatKey[] = ['focus', 'growthMind', 'comprehension', 'logic', 'energy'];
