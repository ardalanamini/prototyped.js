import { addPrototype } from "../../utils.js";
import camelCase from "./index.js";

declare global {
  interface String {

    /**
     * Converts the string to camelcase
     * @example
     * "some_database_field_name".camelCase(); // "someDatabaseFieldName"
     * @example
     * "Some label that needs to be camelized".camelCase(); // "someLabelThatNeedsToBeCamelized"
     * @example
     * "some-javascript-property".camelCase(); // "someJavascriptProperty"
     * @example
     * "some-mixed_string with spaces_underscores-and-hyphens".camelCase();
     * // "someMixedStringWithSpacesUnderscoresAndHyphens"
     */
    camelCase(): string;
  }
}

addPrototype(String, "camelCase", camelCase);
