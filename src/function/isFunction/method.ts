// tslint:disable-next-line:ban-types
const method = (arg: any): arg is Function => arg instanceof Function;

export = method;
