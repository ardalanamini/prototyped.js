import * as method from "./method";

declare global {
  interface String {
    humanize(): string;
  }
}

/**
 * Converts an underscored, camelized, or dasherized string into a humanized one.
 * Also removes beginning and ending whitespace
 * @memberof String
 * @returns {string}
 * @example
 * '  capitalize dash-CamelCase_underscore trim  '.humanize(); // 'Capitalize dash camel case underscore trim'
 */
String.prototype.humanize = function() {
  return method(this as string);
};
