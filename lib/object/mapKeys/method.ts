const method = (obj: { [key: string]: any }, fn: (value: any, key: string | number, object: object) => any): object => {
  return Object.keys(obj).reduce((acc: { [key: string]: any }, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];

    return acc;
  }, {});
};

export = method;
