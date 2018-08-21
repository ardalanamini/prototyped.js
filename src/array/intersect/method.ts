const method = <T = any>(arr: T[], array: any[]): T[] => {
  const set = new Set(array);

  return arr.filter((item) => set.has(item));
};

export = method;
