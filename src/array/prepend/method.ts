const method = <T = any>(arr: T[], value: any): void => {
  const array = [...arr];

  arr.length = 0;

  arr.push(...[value].concat(array));
};

export = method;
