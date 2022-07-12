/**
 * Given a flat array of objects linked to one another, it will nest them recursively
 * @param arr
 * @param [link="parent_id"]
 * @param [key="id"]
 * @example
 * const comments = [
 *   { id: 1, comment_id: null },
 *   { id: 2, comment_id: 1 },
 *   { id: 3, comment_id: 1 },
 *   { id: 4, comment_id: 2 },
 *   { id: 5, comment_id: 4 }
 * ];
 * nest(comments, "comment_id"); // [{ id: 1, comment_id: null, children: [...] }]
 */
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
