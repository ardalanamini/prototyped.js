const method = (n: number): number => n <= 1 ? 1 : n * Math.factorial(n - 1);

export = method;
