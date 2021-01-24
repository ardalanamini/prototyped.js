export default function limit<T>(array: T[], limit: number): T[] {
  return array.slice(0, limit);
}
