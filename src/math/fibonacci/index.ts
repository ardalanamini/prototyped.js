export default function fibonacci(nth: number): number[] {
  return Array.from<number>({ length: nth }).reduce(
    (prev, value, index) =>
      prev.concat(index > 1 ? prev[index - 1] + prev[index - 2] : index),
    [] as number[],
  );
}
