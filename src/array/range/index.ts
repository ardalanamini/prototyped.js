export default function range(end: number, start = 0, step = 1): number[] {
  return Array.from({
    length: Math.ceil((end + 1 - start) / step),
  }).map((value, index) => index * step + start);
}
