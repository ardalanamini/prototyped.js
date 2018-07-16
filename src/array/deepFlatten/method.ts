const method = (arr: any[]): any[] => [].concat(...arr.map((v) => (Array.isArray(v) ? method(v) : v)));

export = method;
