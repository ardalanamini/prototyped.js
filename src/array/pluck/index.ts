import { PathT, pathToKeys } from "../../utils.js";

export default function pluck<
  Value extends Record<string, unknown>,
  Path extends PathT<Value>,
>(array: Value[], path: Path): unknown[] {
  const keys = pathToKeys(path);

  return array.map((item) =>
    keys.reduce((prev, cur) => (prev && (prev as any)[cur]) || undefined, item),
  );
}
