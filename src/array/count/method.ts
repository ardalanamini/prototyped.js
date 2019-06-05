const method = <T = any>(arr: T[], value: T) =>
  value ? arr.reduce((a, v) => a + Number(v === value), 0) : arr.length;

export = method;
