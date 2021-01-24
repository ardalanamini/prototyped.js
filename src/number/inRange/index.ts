export default function inRange(num: number, end: number, start = 0): boolean {
  return start <= num && num <= end;
}
