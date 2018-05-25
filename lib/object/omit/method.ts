const method = (obj: { [key: string]: any }, arr: string[] | ((value: any, key: string) => any)): object => {
  let fn = arr as (value: any, key: string) => any;

  if (Array.isArray(arr)) fn = (v, k) => arr.indexOf(k) !== -1;

  return Object.keys(obj)
    .filter((k) => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as { [key: string]: any });
};

export = method;
