/**
 * Returns the item at a given index. If the index does not exist, def is returned
 * @param arr
 * @param path
 * @example
 * unwind([{ foo: ["bar 1", "bar 2"] }, { foo: ["bar 3", "bar 4", "bar 5"] }], "foo");
 * // [{ foo: "bar 1" }, { foo: "bar 2" }, { foo: "bar 3" }, { foo: "bar 4" }, { foo: "bar 5" }]
 */
export default function unwind<T>(arr: T[], path: string): unknown[] {
  return arr.reduce<any[]>((prev, cur) => {
    const values: any[] = (cur as any)[path];

    values.forEach(value => prev.push(({
      ...cur,
      [path]: value,
    }) as any));

    return prev;
  }, []);
}
