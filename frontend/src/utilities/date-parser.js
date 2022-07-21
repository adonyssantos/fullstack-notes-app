export function parseDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}
