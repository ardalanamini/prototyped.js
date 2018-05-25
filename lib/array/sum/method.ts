const method = (arr: any[], key?: string): number => {
  if (key) {
    const keys = key.split(".");

    const reducer = (item: any) => keys.reduce((prev, curr) => (prev && prev[curr]) || 0, item);

    return arr.reduce((prev, cur) => prev + reducer(cur), 0);
  }

  return arr.reduce((prev, cur) => prev + cur, 0);
};

export = method;
