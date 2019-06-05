/**
 * convert key path string to key array
 * @private
 * @param {String} path
 * @returns {Array}
 * @example
 * pathToKeys("selector.to[0][11].value"); // ["selector", "to", 0, 11, "value"]
 */
export const pathToKeys = (path: string) =>
  path
    .replace(/([^\.])\[/g, (m, match) => `${match}.[`)
    .split(".")
    .map(key => {
      const match = key.match(/^\[(\d+)\]$/);

      if (match) return +match[1];

      return key;
    });

/**
 *
 * @private
 * @param {*} obj
 * @param {String} key
 * @param {*} value
 * @example
 * addPrototype(Object, "$size", function() {return this;});
 */
export const addPrototype = (
  obj: any,
  key: string,
  method: (...args: any[]) => any,
) => {
  const prototype = obj.prototype;

  if (prototype.hasOwnProperty(key)) return;

  Object.defineProperty(prototype, key, {
    value(...args: any[]) {
      return method.apply(0, [this].concat(args));
    },
    writable: true,
  });
};

/**
 *
 * @private
 * @param {Array} arr
 * @param {String} [path]
 * @param {Function} fn
 * @returns {*}
 * @example
 * filter([1, 2, 3], undefined, (value) => value > 1);
 */
export const filter = <T = any>(
  arr: T[],
  path: string | undefined,
  fn: (value: T, index: number, array: T[]) => any,
) => {
  if (path) {
    const keys = pathToKeys(path);

    const reducer = (item: T) =>
      keys.reduce((prev, curr) => (prev as any)[curr], item);

    return arr.filter((item, index, items) => fn(reducer(item), index, items));
  }

  return arr.filter(fn);
};

/**
 *
 * @private
 * @param {*} value
 * @returns {*}
 * @example
 * deepClone([1, 2, 3]);
 */
export const deepClone = <T = any>(value: T): T => {
  if (typeof value !== "object") return value;

  if (value instanceof Date) return new Date(value.getTime()) as any;

  const clone: any = Object.assign({}, value);

  Object.keys(clone).forEach(
    key =>
      (clone[key] =
        typeof (value as any)[key] === "object"
          ? deepClone((value as any)[key])
          : (value as any)[key]),
  );

  if (Array.isArray(value)) {
    clone.length = value.length;

    return Array.from(clone) as any;
  }

  return clone;
};

export type Operator = "<" | "<=" | "=" | "<>" | ">=" | ">";

export const enum OPERATOR {
  LT = "<",
  LTE = "<=",
  EQ = "=",
  NE = "<>",
  GTE = ">=",
  GT = ">",
}
