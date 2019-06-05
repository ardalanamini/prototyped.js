const method = <T = any>(arr: T[]): T[] => (arr.length > 1 ? arr.slice(1) : []);

export = method;
