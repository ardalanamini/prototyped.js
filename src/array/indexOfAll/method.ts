const method = (arr: any[], value: any): number[] => {
  const indices: number[] = [];

  arr.forEach((item, index) => item === value && indices.push(index));

  return indices;
};

export = method;
