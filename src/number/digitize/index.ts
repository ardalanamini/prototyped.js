export default function digitize(num: number): number[] {
  return [...`${num}`].map((n) => +n);
}
