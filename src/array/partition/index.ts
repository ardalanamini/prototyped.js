export default function partition<T>(
  arr: T[],
  fn: (value: T, index: number, array: T[]) => boolean,
): [T[], T[]] {
  return arr.reduce(
    (prev, value, index, array) => {
      prev[fn(value, index, array) ? 0 : 1].push(value);

      return prev;
    },
    [[], []] as [T[], T[]],
  );
}
