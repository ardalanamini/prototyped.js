export default function repeat<T = 0>(n: number, value: T = 0 as never): T[] {
  return Array(n).fill(value);
}
