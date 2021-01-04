const method = (
  obj: Record<string, unknown>,
  arr:
    | string[]
    | ((value: any, key: string, object: Record<string, unknown>) => any),
): Record<string, unknown> => {
  let fn = arr as (
    value: any,
    key: string,
    object: Record<string, unknown>,
  ) => any;

  if (Array.isArray(arr)) fn = (v, k) => arr.indexOf(k) !== -1;

  return Object.keys(obj)
    .filter((k) => !fn((obj as { [key: string]: any })[k], k, obj))
    .reduce(
      (acc, key) => ((acc[key] = (obj as { [key: string]: any })[key]), acc),
      {} as { [key: string]: any },
    );
};

export = method;
