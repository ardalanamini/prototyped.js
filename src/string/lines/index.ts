/**
 * Splits a multiline string into an array of lines
 * @param str
 * @example
 * 'This\nis a\nmultiline\nstring.\n'.lines(); // ['This', 'is a', 'multiline', 'string.' , '']
 */
export default function lines(str: string): string[] {
  return str.split(/\r?\n/);
}
