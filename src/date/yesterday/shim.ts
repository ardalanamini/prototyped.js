import yesterday from "./index.js";

declare global {
  interface DateConstructor {
    /**
     * Returns yesterday's date in `YYYY-MM-DD` format
     * @example
     * Date.yesterday(); // "2018-08-11"
     */
    yesterday(): string;
  }
}

Date.yesterday = yesterday;
