export default function nest<T extends Record<string, unknown>>(
  arr: T[],
  link = "parent_id",
  key = "id",
): Record<string, unknown>[] {
  return filter(arr, link, key);
}

function filter(
  arr: Record<string, unknown>[],
  link: string,
  key: string,
  id: unknown = null,
): Record<string, unknown>[] {
  return arr
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: filter(arr, link, key, item[key]) }));
}
