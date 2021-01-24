export default function indexOfAll<T>(array: T[], value: T): number[] {
  const indices: number[] = [];

  array.forEach((item, index) => item === value && indices.push(index));

  return indices;
}
