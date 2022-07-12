/**
 * Decodes data encoded with MIME base64
 * @example
 * base64Decode("cHJvdG90eXBlZC5qcw=="); // "prototyped.js"
 */
export default function base64Decode(str: string): string {
  return Buffer.from(str, "base64").toString();
}
