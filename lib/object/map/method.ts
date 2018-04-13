const method = (obj: { [key: string]: any }, fn: (value: any, key: string | number, object: object) => any): object => {
  return Object.keys(obj).reduce((acc: { [key: string]: any }, k) => {
    acc[k] = fn(obj[k], k, obj);

    return acc;
  }, {});
};

export = method;
