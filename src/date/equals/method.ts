import isDate from "../isDate/method";

const method = (date: Date, value: any): boolean =>
  isDate(value) && date.getTime() === value.getTime();

export = method;
