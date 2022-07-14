/**
 * Assigns object in reverse by Object.assign
 * @param obj
 * @param sources
 * @example
 * defaults(({ a: 0 }), { a: 1, b: 2 }, { b: 3 }); // { a: 0, b: 2 }
 */
export default function defaults(
  obj: Record<string, unknown>,
  ...sources: Array<Record<string, unknown>>
): Record<string, unknown> {
  return Object.assign(sources.pop() ?? {}, ...sources.reverse(), obj);
}
