/**
 * Checks if n is between start and up to end
 * @param num
 * @param end
 * @param [start=0]
 * @example
 * inRange(4, 8); // true
 */
export default function inRange(num: number, end: number, start = 0): boolean {
  return start <= num && num <= end;
}
