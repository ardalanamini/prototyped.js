export default function skip<T>(arr: T[], offset: number): T[] {
  return arr.slice(offset);
}
