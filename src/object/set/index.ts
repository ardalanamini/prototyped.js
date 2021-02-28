import { pathToKeys } from "../../utils";

export default function set(
  obj: Record<string, unknown>,
  path: string,
  value: unknown,
): void {
  const keys = pathToKeys(path);
  const length = keys.length;
  let i = 0;

  for (; i < length - 1; i++) {
    const key = keys[i];

    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return;
    }

    obj = obj[key] as never;
  }

  obj[keys[i]] = value;
}
