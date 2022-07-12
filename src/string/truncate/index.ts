/**
 * Truncates a string up to a specified length
 * @param str
 * @param num
 * @param [truncateString="..."]
 * @example
 * truncate('boomerang', 7); // 'boom...'
 * @example
 * truncate('boomerang', 7, '....'); // 'boo....'
 */
export default function truncate(
  str: string,
  num: number,
  truncateString = "...",
): string {
  const length = truncateString.length;

  return str.length > num
    ? str.slice(0, num > length ? num - length : num) + truncateString
    : str;
}
