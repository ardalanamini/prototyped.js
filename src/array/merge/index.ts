export default function merge<T>(arr: T[], arr2: unknown[]): void {
  arr.push(...(arr2 as never[]));
}
