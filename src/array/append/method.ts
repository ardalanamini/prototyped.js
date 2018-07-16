const method = (arr: any[], value: any) => {
  const array = arr.concat([value]);

  arr.length = 0;

  arr.push(...array);
};

export = method;
