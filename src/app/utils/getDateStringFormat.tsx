export default function getDateStringFormat(dateString: string): string {
  const DateInput = new Date(dateString);
  const FormatDE = DateInput.toLocaleDateString('de-DE');
  return FormatDE;
}
