import { addPrototype } from "../../utils.js";
import humanize from "./index.js";

declare global {
  interface String {

    /**
     * Converts an underscored, camelized, or dasherized string into a humanized one.
     * Also removes beginning and ending whitespace
     * @example
     * '  capitalize dash-CamelCase_underscore trim  '.humanize();
     * // 'Capitalize dash camel case underscore trim'
     */
    humanize(): string;
  }
}

addPrototype(String, "humanize", humanize);
