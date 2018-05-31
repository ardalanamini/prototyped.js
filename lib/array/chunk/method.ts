const method = (arr: any[], size: number): any[][] => {
  return Array.from(
    {
      length: Math.ceil(arr.length / size),
    },
    (value, index) => arr.slice(index * size, index * size + size),
  );
};

export = method;
