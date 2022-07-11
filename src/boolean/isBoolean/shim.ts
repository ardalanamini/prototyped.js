import isBoolean from "./index.js";

declare global {
  interface BooleanConstructor {
    /**
     * Returns true if the given argument is a boolean
     * @param arg
     * @example
     * Boolean.isBoolean('foo bar'); // false
     * @example
     * Boolean.isBoolean(false); // true
     */
    isBoolean(arg: unknown): arg is boolean;
  }
}

Boolean.isBoolean = isBoolean;
