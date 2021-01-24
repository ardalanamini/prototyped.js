import repeat from "../repeat";

export default function pad<T>(
  arr: T[],
  size: number,
  value: T = 0 as never,
): T[] {
  const length = Math.abs(size) - arr.length;

  if (length <= 0) return arr;

  const array = repeat(length, value);

  if (size < 0) return array.concat(arr);

  return arr.concat(array);
}
