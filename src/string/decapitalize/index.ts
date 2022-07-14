/**
 * Returns the decapitalized string
 * @param str
 * @param [allWords=false]
 * @example
 * decapitalize('Foo Bar'); // 'foo Bar'
 * @example
 * decapitalize('Hello World', true); // 'hello world'
 */
export default function decapitalize(str: string, allWords = false): string {
  if (allWords) return str.replace(/\b[A-Z]/g, char => char.toLowerCase());

  return str.replace(/^[A-Z]/, char => char.toLowerCase());
}
