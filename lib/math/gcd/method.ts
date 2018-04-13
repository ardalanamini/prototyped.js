const method = (...nums: number[]): number => {
  const gcd = (x: number, y: number) => (!y ? x : Math.gcd(y, x % y));

  return nums.reduce((a, b) => gcd(a, b));
};

export = method;
