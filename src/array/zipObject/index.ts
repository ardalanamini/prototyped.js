export default function zipObject<T>(
  arr: T[],
  array: any[],
): Record<string, unknown> {
  return arr.reduce(
    (obj: any, prop, index) => ((obj[prop] = array[index]), obj),
    {},
  );
}
