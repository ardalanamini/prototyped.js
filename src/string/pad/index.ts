import repeat from "../repeat/index.js";

/**
 * FillS the string with the given value until the string reaches the specified size
 * @param str
 * @param size
 * @param [value=" "]
 * @example
 * pad("123", 5, 0); // "12300"
 * @example
 * pad("123", -5, 0); // "00123"
 */
export default function pad(str: string, size: number, value = " "): string {
  const s = Math.abs(size);

  if (s <= str.length) return str;

  const padStr = repeat(s - str.length, value);

  if (size < 0) return `${ padStr }${ str }`;

  return `${ str }${ padStr }`;
}
