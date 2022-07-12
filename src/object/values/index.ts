/**
 * Get values of the object
 * @example
 * values({ one: 1, two: 2, three: 3 }); // [1, 2, 3]
 */
export default function values<T extends Record<string, unknown>,
  K extends keyof T>(obj: T): T[K][] {
  return Object.values<T[K]>(obj as never);
}
