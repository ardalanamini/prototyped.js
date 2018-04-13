const method = (arr: any[], value: any): void  => {
  const array = [...arr];

  arr.length = 0;

  arr.push(...[value].concat(array));
};

export = method;
