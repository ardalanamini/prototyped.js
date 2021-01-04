const method = <T = any>(
  arr: T[],
  fn: string | ((item: T, index: number, array: T[]) => any),
): { [key: string]: T[] } => {
  return arr
    .map(typeof fn === "function" ? fn : (value) => (value as any)[fn])
    .reduce((prev, value, i) => {
      prev[value] = (prev[value] || []).concat(arr[i]);

      return prev;
    }, {});
};

export = method;
