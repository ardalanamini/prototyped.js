const method = (obj: object, ...objects: object[]): object =>
  [obj, ...objects].reduce(
    (prev: { [key: string]: any }, obj: { [key: string]: any }) =>
      Object.keys(obj).reduce((a, k) => {
        prev[k] = prev.hasOwnProperty(k) ? [].concat(prev[k]).concat(obj[k]) : obj[k];

        return prev;
      }, {}),
    {}
  );

export = method;
