/**
 * Find out if the string contains the argument at any position
 * @param str
 * @param str2
 * @param [sensitive=false]
 * @example
 * contains('javaScript & typescript', 'Typescript'); // true
 * @example
 * contains('javaScript & typescript', 'Typescript', true); // false
 */
export default function contains(
  str: string,
  str2: string,
  sensitive = false,
): boolean {
  if (sensitive) return str.indexOf(str2) !== -1;

  return str.toLowerCase().indexOf(str2.toLowerCase()) !== -1;
}
