export default function first<T>(array: [T, ...unknown[]]): T {
  return array[0];
}
