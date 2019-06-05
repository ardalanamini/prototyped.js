// tslint:disable-next-line:ban-types
const method = (arg: any): arg is Function => typeof arg === "function";

export = method;
