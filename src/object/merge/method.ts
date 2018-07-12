const method = (obj: { [key: string]: any }, ...objects: object[]): object =>
  [obj, ...objects].reduce(
    (acc: { [key: string]: any }, obj: { [key: string]: any }) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];

        return acc;
      }, {}),
    {},
  );

export = method;
