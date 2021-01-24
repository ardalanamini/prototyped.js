export default function append<T>(array: T[], value: T): number {
  const newArray = array.concat([value]);

  array.length = 0;

  return array.push(...newArray);
}
