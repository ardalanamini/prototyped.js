const method = (arr: any[], array: any[]): any[] => {
  const set = new Set(array);

  return arr.filter((item) => set.has(item));
};

export = method;
