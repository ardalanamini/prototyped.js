import camelCase from "../../string/camelCase";
import forEach from "../forEach";

export default function camelCaseKeys(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  forEach(obj, (value, key) => (result[camelCase(key)] = value));

  return result;
}
