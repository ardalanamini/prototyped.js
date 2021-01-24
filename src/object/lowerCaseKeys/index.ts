import forEach from "../forEach";

export default function lowerCaseKeys(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  forEach(obj, (value, key) => (result[key.toLowerCase()] = value));

  return result;
}
