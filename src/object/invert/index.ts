import keys from "../keys";

export default function invert(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  return keys(obj).reduce((acc, key) => {
    acc[obj[key] as string] = key;

    return acc;
  }, {} as Record<string, unknown>);
}
