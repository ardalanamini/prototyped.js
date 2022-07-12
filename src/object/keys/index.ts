/**
 * Get keys of the object
 * @param obj
 * @example
 * keys({ one: 1, two: 2, three: 3 }); // ["one", "two", "three"]
 */
export default function keys<T extends Record<string, unknown>>(
  obj: T,
): Array<keyof T> {
  return Object.keys(obj);
}
