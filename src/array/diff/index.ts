export default function diff<T, P>(
  array1: T[],
  array2: P[],
  comp?: (a: T, b: P) => boolean,
): T[] {
  if (comp)
    return array1.filter((a) => array2.findIndex((b) => comp(a, b)) === -1);

  const set = new Set(array2);

  return array1.filter((item) => !set.has(item as never));
}
