const method = (arr: any[], ...args: any[]): void => {
  const pulled = arr.filter((value: any) => !(args as any).includes(value));

  arr.length = 0;

  pulled.forEach((value) => arr.push(value));
};

export = method;
