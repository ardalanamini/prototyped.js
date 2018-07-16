const method = (arr: any[], index: number, def = null): any => {
  if (index >= arr.length) return def;

  return arr[index];
};

export = method;
