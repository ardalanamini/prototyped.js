export { }

declare global {
  interface String {
    mask(num?: number, mask?: string): string
  }
}

/**
 * Replaces all but the last num of characters with the specified mask character
 * @memberof String
 * @param {number} [num=4]
 * @param {string} [mask='*']
 * @returns {string}
 * @example
 * '1234567890'.mask(); // '******7890'
 * '1234567890'.mask(3); // '*******890'
 * '1234567890'.mask(-4, '$'); // '$$$$567890'
 */
String.prototype.mask = function(num = 4, mask = '*'): string {
  return this.slice(0, -num).replace(/./g, mask) + this.slice(-num)
}
