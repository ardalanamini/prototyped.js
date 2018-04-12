const method = (arr: any[], fn: string | ((value: any) => any)) => arr.map(
  typeof fn === "function" ? fn : (val) => val[fn],
).reduce((acc: { [key: string]: any }, val: string, i) => {
  acc[val] = (acc[val] || 0) + 1;

  return acc;
}, {});

export = method;
