const method = (
  obj: object,
  arr: string[] | ((value: any, key: string, object: object) => any),
): object => {
  let fn = arr as (value: any, key: string, object: object) => any;

  if (Array.isArray(arr)) fn = (v, k) => arr.indexOf(k) !== -1;

  return Object.keys(obj)
    .filter(k => !fn((obj as { [key: string]: any })[k], k, obj))
    .reduce(
      (acc, key) => ((acc[key] = (obj as { [key: string]: any })[key]), acc),
      {} as { [key: string]: any },
    );
};

export = method;
