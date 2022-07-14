import today from "./index.js";

declare global {
  interface DateConstructor {

    /**
     * Returns today's date in `YYYY-MM-DD` format
     * @example
     * Date.today(); // "2018-08-10"
     */
    today(): string;
  }
}

Date.today = today;
