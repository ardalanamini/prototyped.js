import isDate from "./index.js";

declare global {
  interface DateConstructor {
    /**
     * Returns true if the given argument is an instance of Date
     * @param arg
     * @example
     * Date.isDate('foo bar'); // false
     * @example
     * Date.isDate(new Date()); // true
     */
    isDate(arg: unknown): arg is Date;
  }
}

Date.isDate = isDate;
