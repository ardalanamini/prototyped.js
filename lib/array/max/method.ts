const method = (arr: any[], key?: string): number => {
  let reducer = (item: any) => item;

  if (key) {
    const keys = key.split(".");

    reducer = (item: any) => keys.reduce((prev, curr) => (prev && prev[curr]) || -Infinity, item);
  }

  return arr.reduce((prev, cur) => Math.max(prev, reducer(cur)), -Infinity);
};

export = method;
