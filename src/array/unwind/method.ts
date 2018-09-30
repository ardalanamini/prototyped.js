const method = <T = any, P = any>(arr: T[], path: string) => {
  return arr.reduce((prev, cur) => {
    const values: any[] = (cur as any)[path];

    values.forEach((value) => prev.push(Object.assign({}, cur, { [path]: value }) as any));

    return prev;
  }, [] as P[]);
};

export = method;
