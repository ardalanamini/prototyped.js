const method = (arr: any[], ...arrays: any[][]): any[][] => {
  arrays = [arr, ...arrays];

  return Array.from({ length: Math.max(...arrays.map((x) => x.length)) }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  });
};

export = method;
