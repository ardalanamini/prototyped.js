const method = <T = any, P = any>(arr: T[], array: P[]): Array<T | P> => Array.from(new Set([...arr, ...array]));

export = method;
