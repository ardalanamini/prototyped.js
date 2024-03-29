/**
 * Replaces all but the last num of characters with the specified mask character
 * @param str
 * @param [num=4]
 * @param [replaceValue='*']
 * @example
 * mask('1234567890'); // '******7890'
 * @example
 * mask('1234567890', 3); // '*******890'
 * @example
 * mask('1234567890', -4, '$'); // '$$$$567890'
 */
export default function mask(str: string, num = 4, replaceValue = "*"): string {
  return str.slice(0, -num).replace(/./g, replaceValue) + str.slice(-num);
}
