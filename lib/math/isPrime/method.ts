const method = (num: number): boolean => {
  const boundary = Math.floor(Math.sqrt(num));
  let i = 2;

  for (; i <= boundary; i++) if (num % i === 0) return false;

  return num >= 2;
};

export = method;
