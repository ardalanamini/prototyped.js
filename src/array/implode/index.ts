import { PathT, pathToKeys } from "../../utils.js";

export default implode;

/**
 * It's like join but u get to tell it which keys to join
 * @param array
 * @param path
 * @param [separator=", "]
 * @example
 * implode([{a: {b: 'first'}}, {a: {b: 'second'}}, {a: {b: 'third'}}], 'a.b', ', ');
 * // 'first, second, third'
 */
function implode<
  Value extends Record<string, unknown>,
  Path extends PathT<Value> = never,
>(array: Value[], path: Path, separator?: string): string;
function implode<Value>(arr: Value[], path: string, separator = ", "): string {
  const keys = pathToKeys(path);

  return arr
    .map((item) =>
      keys.reduce(
        (prev, cur) => (prev && (prev as any)[cur]) || undefined,
        item,
      ),
    )
    .filter(Boolean)
    .join(separator);
}
