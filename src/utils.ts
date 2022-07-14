export const STRAIGHT_ANGLE_DEGREE = 180.0;

export const PI = Math.PI;

export const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Convert key path string to key array
 * @private
 * @param path
 * @example
 * pathToKeys("selector.to[0][11].value"); // ["selector", "to", 0, 11, "value"]
 */
export const pathToKeys = (path: string): Array<number | string> => path
  .replace(/(?<key>[^.])\[/g, (m, match) => `${ match }.[`)
  .split(".")
  .map((key) => {
    const match = key.match(/^\[(?<digits>\d+)]$/);

    if (match?.groups) return +match.groups.digits;

    return key;
  });

/**
 *
 * @private
 * @param obj
 * @param keys
 * @param method
 * @example
 * addPrototype(Object, "$size", function() {return this;});
 */
export const addPrototype = (
  obj: unknown,
  keys: string[] | string,
  method: (...args: any[]) => any,
): void => {
  if (Array.isArray(keys)) {
    keys.forEach(key => addPrototype(obj, key, method));

    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const prototype = (obj as any).prototype;

  if (hasOwnProperty.call(prototype, keys)) return;

  Object.defineProperty(prototype, keys, {
    value(...args: unknown[]) {
      return method.apply(0, [this].concat(args));
    },
    writable: true,
  });
};

/**
 *
 * @private
 * @param arr
 * @param [path]
 * @param fn
 * @example
 * filter([1, 2, 3], undefined, (value) => value > 1);
 */
export const filter = <T>(
  arr: T[],
  path: string | undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fn: (value: T, index: number, array: T[]) => any,
): T[] => {
  if (path) {
    const keys = pathToKeys(path);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reducer = (item: T): any => keys.reduce((prev, curr) => (prev as any)[curr], item);

    return arr.filter((item, index, items) => fn(reducer(item), index, items));
  }

  return arr.filter(fn);
};

/**
 *
 * @private
 * @param value
 * @example
 * deepClone([1, 2, 3]);
 */
export const deepClone = <T>(value: T): T => {
  if (typeof value !== "object") return value;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (value instanceof Date) return new Date(value.getTime()) as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clone: any = { ...value };

  Object.keys(clone).forEach(key => (clone[key]
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        = typeof (value as any)[key] === "object"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ? deepClone((value as any)[key])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      : (value as any)[key]));

  if (Array.isArray(value)) {
    clone.length = value.length;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Array.from(clone) as any;
  }

  return clone;
};

export type OperatorT = "<" | "<=" | "<>" | "=" | ">" | ">=";

export const enum OPERATOR {
  LT = "<",
  LTE = "<=",
  EQ = "=",
  NE = "<>",
  GTE = ">=",
  GT = ">",
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RecordT = Record<string, any>;

export type PathsToStringPropsT<Value> = Value extends Record<string, unknown>
  ? {
      [Key in keyof Value]: [Key, ...PathsToStringPropsT<Value[Key]>] | [Key];
    }[keyof Value]
  : [];

export type JoinT<Value extends string[]> = Value extends []
  ? never
  : Value extends [infer F]
    ? F
    : Value extends [infer F, ...infer R]
      ? F extends string
        ? string extends F
          ? string
          : `${ F }.${ JoinT<Extract<R, string[]>> }`
        : never
      : string;

export type PathT<Value> = Value extends RecordT ? JoinT<Extract<PathsToStringPropsT<Value>, string[]>> : never;
