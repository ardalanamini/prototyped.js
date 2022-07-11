const PI = Math.PI;

/**
 * Converts a radians to decimal degree
 * @param num
 * @example
 * radsToDegrees(Math.PI / 2); // 90
 */
export default function radsToDegrees(num: number): number {
  return (num * 180.0) / PI;
}
