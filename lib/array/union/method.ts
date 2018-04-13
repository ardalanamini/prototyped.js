const method = (arr: any[], array: any[]): any[] => Array.from(new Set([...arr, ...array]));

export = method;
