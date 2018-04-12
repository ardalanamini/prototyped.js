const method = (arr: any[], size: number): any[][] => {
  return Array.from(
    {
      length: Math.ceil(arr.length / size),
    },
    (value: any, index: number) => arr.slice(index * size, index * size + size),
  );
};

export = method;
