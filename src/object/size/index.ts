import keys from "../keys/index.js";

/**
 * Get size of the object
 * @example
 * size({ one: 1, two: 2, three: 3 }); // 3
 */
export default function size(obj: Record<string, unknown>): number {
  return (obj.size as number) || (obj.length as number) || keys(obj).length;
}
