import repeat from "../repeat/index.js";

export default function pad(str: string, size: number, value = " "): string {
  const s = Math.abs(size);

  if (s <= str.length) return str;

  const padStr = repeat(s - str.length, value);

  if (size < 0) return `${padStr}${str}`;

  return `${str}${padStr}`;
}
