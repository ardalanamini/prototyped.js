const method = (arr: any[], ...args: any[]): void => {
  const pulled = arr.filter((value: any) => !(Array.isArray(args[0]) ? args[0] : args).includes(value));

  arr.length = 0;

  pulled.forEach((value) => arr.push(value));
};

export = method;
