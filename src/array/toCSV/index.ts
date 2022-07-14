/**
 * Converts a 2D array to a comma-separated values (CSV) string
 * @param arr
 * @param [delimiter=","]
 * @example
 * toCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
 * @example
 * toCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
 */
export default function toCSV<T>(arr: T[], delimiter = ","): string {
  return arr
    .map((v: any) => v.map((x: any) => `"${ x }"`).join(delimiter))
    .join("\n");
}
