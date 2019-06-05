const method = (obj: object, ...objects: object[]): object =>
  [obj, ...objects].reduce(
    (prev: { [key: string]: any }, obj2: { [key: string]: any }) =>
      Object.keys(obj2).reduce((a, k) => {
        prev[k] = prev.hasOwnProperty(k)
          ? [].concat(prev[k]).concat(obj2[k])
          : obj2[k];

        return prev;
        // tslint:disable-next-line: align
      }, {}),
    {},
  );

export = method;
