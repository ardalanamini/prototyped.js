export default function capitalize(str: string, allWords = false): string {
  if (allWords) return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

  return str.replace(/^[a-z]/, (char) => char.toUpperCase());
}
