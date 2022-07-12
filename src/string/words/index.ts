/**
 * Converts a given string into an array of words
 * @param str
 * @param [pattern=/[^a-zA-Z-]+/]
 * @example
 * words('I love javaScript!!'); // ["I", "love", "javaScript"]
 * @example
 * words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
 */
export default function words(str: string, pattern = /[^a-zA-Z-]+/): string[] {
  return str.split(pattern).filter(Boolean);
}
