import { PathT, pathToKeys } from "../../utils.js";

/**
 * Retrieve the property indicated by the given selector from the object
 * @param obj
 * @param key
 * @example
 * get({ selector: { to: { val: 'val to select' } } }, 'selector.to.val'); // 'val to select'
 */
export default function get<
  Value extends Record<string, unknown>,
  Path extends PathT<Value> = never,
>(obj: Record<string, unknown>, key: Path): unknown {
  return pathToKeys(key).reduce(
    (prev, cur) => prev[cur] as Record<string, unknown>,
    obj,
  );
}
