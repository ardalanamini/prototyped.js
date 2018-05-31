const method = (obj: { [key: string]: any }): number => obj.size || obj.length || Object.keys(obj).length;

export = method;
