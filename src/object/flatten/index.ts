import forEach from "../forEach/index.js";
import isPlainObject from "../isPlainObject/index.js";

/**
 * Flattens the object into a single-depth object
 * @param obj
 * @example
 * flatten({ foo: 1, bar: { foo: 2 } }); // { foo: 1, "bar.foo": 2 }
 */
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
