import isDate from "../isDate/index.js";

export default function equals(date: Date, value: unknown): boolean {
  return isDate(value) && date.getTime() === value.getTime();
}
