/**
 * Converts string to an integer of the specified radix
 * @param str
 * @param [radix]
 * @example
 * parseInt("08"); // 8
 */
export default function parseInt(str: string, radix?: number): number {
  return Number.parseInt(str, radix);
}
