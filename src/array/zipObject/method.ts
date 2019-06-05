const method = <T = any>(arr: T[], array: any[]): object => {
  return arr.reduce(
    (obj: any, prop, index) => ((obj[prop] = array[index]), obj),
    {},
  );
};

export = method;
