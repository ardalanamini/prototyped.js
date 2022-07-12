/**
 * Encodes data with MIME base64
 * @example
 * base64('prototyped.js'); // 'cHJvdG90eXBlZC5qcw=='
 */
export default function base64(str: string): string {
  return Buffer.from(str).toString("base64");
}
