const hasOwnProperty = Object.prototype.hasOwnProperty;

const method = (
  obj: Record<string, unknown>,
  ...objects: Record<string, unknown>[]
): Record<string, unknown> =>
  [obj, ...objects].reduce(
    (prev: { [key: string]: any }, obj2: { [key: string]: any }) =>
      Object.keys(obj2).reduce((a, k) => {
        prev[k] = hasOwnProperty.call(prev, k)
          ? [].concat(prev[k]).concat(obj2[k])
          : obj2[k];

        return prev;
      }, {}),
    {},
  );

export = method;
