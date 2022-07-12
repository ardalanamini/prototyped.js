/**
 * Initializes an array containing the numbers in the specified range where start
 * and end are inclusive with there common difference step
 * @param end
 * @param [start=0]
 * @param [step=1]
 * @example
 * range(5); // [0,1,2,3,4,5]
 * @example
 * range(7, 3); // [3,4,5,6,7]
 * @example
 * range(9, 0, 2); // [0,2,4,6,8]
 */
export default function range(end: number, start = 0, step = 1): number[] {
  return Array.from({
    length: Math.ceil((end + 1 - start) / step),
  }).map((value, index) => index * step + start);
}
