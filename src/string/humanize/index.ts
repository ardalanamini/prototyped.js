import * as method from "./method";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    humanize(): string;
  }
}

/**
 * Converts an underscored, camelized, or dasherized string into a humanized one.
 * Also removes beginning and ending whitespace
 * @memberof String.prototype
 * @function humanize
 * @returns {String}
 * @example
 * '  capitalize dash-CamelCase_underscore trim  '.humanize(); // 'Capitalize dash camel case underscore trim'
 */
addPrototype(String, "humanize", method);
