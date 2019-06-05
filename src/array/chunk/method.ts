const method = <T = any>(arr: T[], size: number): T[][] => {
  return Array.from(
    {
      length: Math.ceil(arr.length / size),
    },
    (value, index) => arr.slice(index * size, index * size + size),
  );
};

export = method;
