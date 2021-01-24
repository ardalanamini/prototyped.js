export default function everyNth<T>(array: T[], n: number): T[] {
  return array.filter((e, i) => i % n === n - 1);
}
