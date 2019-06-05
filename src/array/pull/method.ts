const method = <T = any>(arr: T[], ...args: T[]): void => {
  const pulled = arr.filter(value => !(args as any).includes(value));

  arr.length = 0;

  pulled.forEach(value => arr.push(value));
};

export = method;
