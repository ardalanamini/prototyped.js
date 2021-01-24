export default function mask(str: string, num = 4, mask = "*"): string {
  return str.slice(0, -num).replace(/./g, mask) + str.slice(-num);
}
