import kebabCase from "../../string/kebabCase/index.js";
import forEach from "../forEach/index.js";

export default function kebabCaseKeys(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  forEach(obj, (value, key) => (result[kebabCase(key)] = value));

  return result;
}
