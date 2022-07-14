import tomorrow from "./index.js";

declare global {
  interface DateConstructor {

    /**
     * Returns tomorrow's date in `YYYY-MM-DD` format
     * @example
     * Date.tomorrow(); // "2018-08-11"
     */
    tomorrow(): string;
  }
}

Date.tomorrow = tomorrow;
