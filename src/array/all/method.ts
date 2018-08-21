const all = <T = any>(arr: T[], fn: (value: T, index: number, array: T[]) => boolean = Boolean) => arr.every(fn);

export = all;
