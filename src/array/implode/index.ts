import { PathT, pathToKeys } from "../../utils.js";

export default implode;

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
