const method = <T = any>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

export = method;
