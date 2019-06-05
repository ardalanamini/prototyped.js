const method = <T = any, P = any>(arr: T[], arr2: P[]) => {
  const joined: Array<[T, P]> = [];

  arr.forEach(item => arr2.forEach(value => joined.push([item, value])));

  return joined;
};

export = method;
