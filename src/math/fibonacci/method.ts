const method = (nth: number): number[] => Array.from({ length: nth }).reduce(
  (acc: any, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
  [],
);

export = method;
