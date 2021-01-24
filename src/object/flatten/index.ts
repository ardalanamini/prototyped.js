import forEach from "../forEach";
import isPlainObject from "../isPlainObject";

export default function flatten(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  forEach(obj, (value, key) => {
    if (Array.isArray(value)) {
      const temp: Record<string, unknown> = {};

      value.forEach((subValue, index) => {
        temp[`[${index}]`] = subValue;
      });

      value = temp;
    }

    if (isPlainObject(value)) {
      const flat = flatten(value);

      forEach(flat, (subValue, subKey: string) => {
        const separator = /^\[/.test(subKey) ? "" : ".";

        result[`${key}${separator}${subKey}`] = subValue;
      });

      return;
    }

    result[key] = value;
  });

  return result;
}
