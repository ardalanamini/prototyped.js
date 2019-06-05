const method = <T extends object>(obj: T): Array<keyof T> => Object.keys(obj) as any;

export = method;
