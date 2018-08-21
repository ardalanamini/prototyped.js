const method = <T = any>(arr: T[], size: number, value: any = 0) => {
  const s = Math.abs(size);

  if (s <= arr.length) return arr;

  const array = Array(s - arr.length).fill(value);

  if (size < 0) return array.concat(arr);

  return arr.concat(array);
};

export = method;
