const method = <T = any>(
  arr: T[],
  fn: string | ((value: T, index: number, arr: T[]) => any),
) =>
  arr
    .map(typeof fn === "function" ? fn : value => (value as any)[fn])
    .reduce((prev: { [key: string]: any }, value: string) => {
      prev[value] = (prev[value] || 0) + 1;

      return prev;
      // tslint:disable-next-line: align
    }, {});

export = method;
