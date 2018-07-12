const method = (arr: any[], fn: (value: any, index: number, array: any[]) => boolean): [any[], any[]] => {
  return arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
    },
    [[], []],
  );
};

export = method;
