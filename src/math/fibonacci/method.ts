const method = (nth: number): number[] =>
  Array.from({ length: nth }).reduce(
    (prev: any, value, index) =>
      prev.concat(index > 1 ? prev[index - 1] + prev[index - 2] : index),
    [],
  ) as any;

export = method;
