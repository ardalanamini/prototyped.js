const method = <T = any>(arr: T[], fn: (value: T, index: number, array: T[]) => boolean = Boolean) => arr.some(fn);

export = method;
