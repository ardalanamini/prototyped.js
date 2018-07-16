const method = (arr: any[], array: any[]): object => {
  return arr.reduce((obj, prop, index) => ((obj[prop] = array[index]), obj), {});
};

export = method;
