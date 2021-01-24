import isDate from "../isDate";

export default function equals(date: Date, value: unknown): boolean {
  return isDate(value) && date.getTime() === value.getTime();
}
