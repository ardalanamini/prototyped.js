import camelCase from ".";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    camelCase(): string;
  }
}

/**
 * Converts the string to camelcase
 * @memberof String.prototype
 * @function camelCase
 * @returns {String}
 * @example
 * "some_database_field_name".camelCase(); // "someDatabaseFieldName"
 * "Some label that needs to be camelized".camelCase(); // "someLabelThatNeedsToBeCamelized"
 * "some-javascript-property".camelCase(); // "someJavascriptProperty"
 * "some-mixed_string with spaces_underscores-and-hyphens".camelCase();
 * // "someMixedStringWithSpacesUnderscoresAndHyphens"
 */
addPrototype(String, "camelCase", camelCase);
