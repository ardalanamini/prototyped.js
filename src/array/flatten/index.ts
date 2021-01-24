export default function flatten<T>(arr: T[], depth = 1): unknown[] {
  if (depth === 1) {
    return arr.reduce((prev, value) => prev.concat(value), [] as unknown[]);
  }

  return arr.reduce(
    (prev, value) =>
      prev.concat(Array.isArray(value) ? flatten(value, depth - 1) : value),
    [] as unknown[],
  );
}
