export default function words(str: string, pattern = /[^a-zA-Z-]+/): string[] {
  return str.split(pattern).filter(Boolean);
}
