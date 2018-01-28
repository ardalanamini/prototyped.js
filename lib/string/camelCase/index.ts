export { }

declare global {
  interface String {
    camelCase(): string
  }
}

/**
 * Converts the string to camelcase
 * @memberof String
 * @returns {string}
 * @example
 * 'some_database_field_name'.camelCase(); // 'someDatabaseFieldName'
 * 'Some label that needs to be camelized'.camelCase(); // 'someLabelThatNeedsToBeCamelized'
 * 'some-javascript-property'.camelCase(); // 'someJavascriptProperty'
 * 'some-mixed_string with spaces_underscores-and-hyphens'.camelCase(); // 'someMixedStringWithSpacesUnderscoresAndHyphens'
 */
String.prototype.camelCase = function(): string {
  let s = this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)

  if (!s) s = ['']

  let str = s.map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()).join('')

  return str.slice(0, 1).toLowerCase() + str.slice(1)
}
