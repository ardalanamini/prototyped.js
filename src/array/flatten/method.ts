const method = <T = any>(arr: T[], depth = 1): any[] =>
  depth !== 1
    ? arr.reduce(
      (prev, value) =>
        prev.concat(Array.isArray(value) ? method(value, depth - 1) : value),
        [] as any[],
    )
    : arr.reduce((prev, value) => prev.concat(value), [] as any[]);

export = method;
