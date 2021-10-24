import { PathT, pathToKeys } from "../../utils.js";

export default function get<
  Value extends Record<string, unknown>,
  Path extends PathT<Value> = never,
>(obj: Record<string, unknown>, key: Path): unknown {
  return pathToKeys(key).reduce(
    (prev, cur) => prev[cur] as Record<string, unknown>,
    obj,
  );
}
