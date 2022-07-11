/**
 * Converts the number to an array of digits
 * @example
 * digitize(123); // [1, 2, 3]
 */
export default function digitize(num: number): number[] {
  return [...`${num}`].map((n) => +n);
}
