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
  if (sensitive) return str.includes(str2);

  return str.toLowerCase().includes(str2.toLowerCase());
}
