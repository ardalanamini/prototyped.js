/**
 * Converts the string to camelcase
 * @example
 * camelCase("some_database_field_name"); // "someDatabaseFieldName"
 * @example
 * camelCase("Some label that needs to be camelized"); // "someLabelThatNeedsToBeCamelized"
 * @example
 * camelCase("some-javascript-property"); // "someJavascriptProperty"
 * @example
 * camelCase("some-mixed_string with spaces_underscores-and-hyphens");
 * // "someMixedStringWithSpacesUnderscoresAndHyphens"
 */
export default function camelCase(str: string): string {
  str = (
    str.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+|[A-Z]|\d+/g) ?? [""]
  )
    .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join("");

  return str.slice(0, 1).toLowerCase() + str.slice(1);
}
