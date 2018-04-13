const method = (arr: any[], array: any[], comp?: (a: any, b: any) => boolean): any[] => {
  if (comp) return arr.filter((a) => array.findIndex((b) => comp(a, b)) === -1);

  const set = new Set(array);

  return arr.filter((item: any) => !set.has(item));
};

export = method;
