const method = <T = any>(arr: T[], value: T) => {
  const array = arr.concat([value]);

  arr.length = 0;

  arr.push(...array);
};

export = method;
