const method = <T = any>(arr: T[], value: T): number[] => {
  const indices: number[] = [];

  arr.forEach((item, index) => item === value && indices.push(index));

  return indices;
};

export = method;
