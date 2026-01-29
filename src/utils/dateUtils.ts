export function formatWeekRange(weekStart: string): string {
  const start = new Date(weekStart);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);

  const startMonth = start.getMonth() + 1;
  const startDay = start.getDate();
  const endDay = end.getDate();

  return `${startMonth}/${startDay}~${startMonth}/${endDay}`;
}

export function getWeekNumber(weekStart: string): number {
  const date = new Date(weekStart);
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = firstDayOfMonth.getDay();
  const adjustedDate = date.getDate() + dayOfWeek;
  return Math.ceil(adjustedDate / 7);
}

export function formatWeekTitle(weekStart: string): string {
  const date = new Date(weekStart);
  const month = date.getMonth() + 1;
  const weekNum = getWeekNumber(weekStart);
  return `${month}월 ${weekNum}주차`;
}

export function formatFullWeekTitle(weekStart: string): string {
  const weekTitle = formatWeekTitle(weekStart);
  const weekRange = formatWeekRange(weekStart);
  return `${weekTitle} (${weekRange})`;
}

export function getMonthYear(weekStart: string): string {
  const date = new Date(weekStart);
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
}

export function groupByMonth(
  weeks: { weekStart: string }[]
): Map<string, typeof weeks> {
  const grouped = new Map<string, typeof weeks>();

  weeks.forEach((week) => {
    const monthYear = getMonthYear(week.weekStart);
    const existing = grouped.get(monthYear) || [];
    grouped.set(monthYear, [...existing, week]);
  });

  return grouped;
}
