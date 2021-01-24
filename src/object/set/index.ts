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
    obj = obj[keys[i]] as never;
  }

  obj[keys[i]] = value;
}
