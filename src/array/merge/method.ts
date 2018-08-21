const method = <T = any>(arr: T[], arr2: any): void  => {
  const array = [...arr];

  arr.length = 0;

  arr.push(...array.concat(arr2));
};

export = method;
