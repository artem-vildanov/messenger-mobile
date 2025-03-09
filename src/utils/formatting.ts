import { format, isToday, isYesterday, parse, subDays } from 'date-fns';

export function formatDate(dateStr: string): string {
  const date = parse(dateStr, 'dd-MM-yyyy HH:mm', new Date());

  if (isToday(date)) {
    return format(date, 'HH:mm');
  }

  if (isYesterday(date)) {
    return 'Вчера';
  }

  if (date >= subDays(new Date(), 2)) {
    return 'Два дня назад';
  }

  return format(date, 'dd.MM.yyyy');
}
