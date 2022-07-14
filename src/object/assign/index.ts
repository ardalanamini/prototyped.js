/**
 * Assigns object like Object.assign
 * @param obj
 * @param sources
 * @example
 * assign(({ a: 0 }), { a: 1 }, { b: 2 }); // { a: 1, b: 2 }
 */
export default function assign(
  obj: Record<string, unknown>,
  ...sources: Array<Record<string, unknown>>
): Record<string, unknown> {
  return Object.assign(obj, ...sources);
}
