const method = (...nums: number[]): number => {
  const gcd: (x: number, y: number) => number = (x, y) =>
    !y ? x : gcd(y, x % y);

  const lcm: (x: number, y: number) => number = (x, y) => (x * y) / gcd(x, y);

  return nums.reduce((a, b) => lcm(a, b));
};

export = method;
