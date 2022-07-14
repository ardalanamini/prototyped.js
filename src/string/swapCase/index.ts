/**
 * Returns a copy of the string in which all the case-based characters have had their case swapped
 * @param str
 * @example
 * swapCase('Hello'); // 'hELLO'
 */
export default function swapCase(str: string): string {
  return str.replace(/\S/g, c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()));
}
