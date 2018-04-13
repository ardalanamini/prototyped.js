// tslint:disable-next-line:ban-types
const method = (func: Function, ...args: any[]): any => setTimeout(func, 1, ...args);

export = method;
