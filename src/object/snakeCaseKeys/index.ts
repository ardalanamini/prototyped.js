import snakeCase from "../../string/snakeCase";
import forEach from "../forEach";

export default function snakeCaseKeys(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  forEach(obj, (value, key) => (result[snakeCase(key)] = value));

  return result;
}
