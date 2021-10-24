import camelCase from "../../string/camelCase/index.js";
import forEach from "../forEach/index.js";

export default function camelCaseKeys(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  forEach(obj, (value, key) => (result[camelCase(key)] = value));

  return result;
}
