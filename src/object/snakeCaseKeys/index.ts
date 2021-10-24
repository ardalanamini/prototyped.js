import snakeCase from "../../string/snakeCase/index.js";
import forEach from "../forEach/index.js";

export default function snakeCaseKeys(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  forEach(obj, (value, key) => (result[snakeCase(key)] = value));

  return result;
}
