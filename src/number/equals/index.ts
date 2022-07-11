/**
 * Checks if the number is equal to the given value
 * @param num
 * @param value
 * @example
 * equals(22, "22"); // false
 */
export default function equals(num: number, value: unknown): boolean {
  return num === value;
}
