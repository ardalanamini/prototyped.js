const method = (arr: any[], fn: string | ((item: any, index: number, array: any[]) => any)): { [key: string]: any } => {
  return arr.map(typeof fn === "function" ? fn : (val) => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);

    return acc;
  }, {});
};

export = method;
