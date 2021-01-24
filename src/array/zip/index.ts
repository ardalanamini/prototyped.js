export default function zip<T>(arr: T[], ...arrays: any[][]): unknown[][] {
  arrays = [arr, ...arrays];

  return Array.from({ length: Math.max(...arrays.map((x) => x.length)) }).map(
    (_, i) => {
      return Array.from({ length: arrays.length }, (__, k) => arrays[k][i]);
    },
  );
}
