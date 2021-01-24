export default function base64Decode(str: string): string {
  return Buffer.from(str, "base64").toString();
}
