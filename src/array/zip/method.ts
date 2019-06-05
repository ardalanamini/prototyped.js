const method = <T = any>(arr: T[], ...arrays: any[][]): any[][] => {
  arrays = [arr, ...arrays];

  return Array.from({ length: Math.max(...arrays.map(x => x.length)) }).map(
    (_, i) => {
      return Array.from({ length: arrays.length }, (__, k) => arrays[k][i]);
    },
  );
};

export = method;
