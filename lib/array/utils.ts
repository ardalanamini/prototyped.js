export const filter = (arr: any[], key: string | undefined, fn: any) => {
  if (key) {
    const keys = key.split(".");
    const reducer = (item: any) => keys.reduce((prev, curr) => prev[curr], item);

    return arr.filter((item) => fn(reducer(item)));
  }

  return arr.filter(fn);
};
