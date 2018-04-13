const method = (arr: any[], depth: number = 1): any[] => depth !== 1 ?
  arr.reduce((a, v) => a.concat(Array.isArray(v) ? method(v, depth - 1) : v), []) :
  arr.reduce((a, v) => a.concat(v), []);

export = method;
