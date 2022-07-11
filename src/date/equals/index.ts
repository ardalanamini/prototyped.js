import isDate from "../isDate/index.js";

/**
 * Checks if the date is equal to the given value
 * @param date
 * @param value
 * @example
 * equals(new Date(), new Date()); // false
 */
export default function equals(date: Date, value: unknown): boolean {
  return isDate(value) && date.getTime() === value.getTime();
}
