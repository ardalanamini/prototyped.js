import kebabCase from "../../string/kebabCase";
import forEach from "../forEach";

export default function kebabCaseKeys(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  forEach(obj, (value, key) => (result[kebabCase(key)] = value));

  return result;
}
