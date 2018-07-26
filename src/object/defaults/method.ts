// @ts-ignore
const method = (obj: object, ...sources: object[]): object => Object.assign(...sources.reverse(), obj);

export = method;
