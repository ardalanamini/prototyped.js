/**
 * Checks if the first numeric argument is divisible by the second one
 * @param dividend
 * @param divisor
 * @example
 * isDivisible(6, 3); // true
 */
export default function isDivisible(
  dividend: number,
  divisor: number,
): boolean {
  return dividend % divisor === 0;
}
