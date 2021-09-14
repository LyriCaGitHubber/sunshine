export default function getWeekdayString(dayString: string): string | null {
  const dayOfWeek = new Date(dayString).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        'Sonntag',
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag',
      ][dayOfWeek];
}
