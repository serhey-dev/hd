export function formatDateWithDots(date?: string | Date) {
  if (!date) {
    return '';
  }
  const isoDate = new Date(date).toISOString().split('T')[0];
  const [year, month, day] = isoDate.split('-');
  return `${day}.${month}.${year}`;
}

export function formatDateToISO(date?: string | Date) {
  if (!date) {
    return '';
  }
  return new Date(date).toISOString().split('T')[0];
}

export function getDateWithExtraDays(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
