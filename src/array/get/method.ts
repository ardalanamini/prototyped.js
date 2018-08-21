const method = <T = any>(arr: T[], index: number, def: any = null) => {
  if (index >= arr.length) return def;

  return arr[index];
};

export = method;
