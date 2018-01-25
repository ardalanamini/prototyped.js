/**
 * @namespace String
 */

export { }

declare global {
  interface StringConstructor {
    isInstance(arg: any): arg is string
  }

  interface String {
    capitalize(allWords?: boolean): string
    decapitalize(allWords?: boolean): string
    mask(num?: number, mask?: string): string
    pluralize(value: number, plural?: string): String
    reverse(): string
    lines(): Array<string>
    camelCase(): string
    kebabCase(): string
    snakeCase(): string
    truncate(num: number): String
    words(pattern?: RegExp): Array<string>
    contains(str: string): boolean
  }
}

if (!String.isInstance) {
  /**
   * Returns true if the given argument is an string
   * @param {*} arg
   * @returns {boolean}
   * @example
   * String.isInstance(2); // false
   * String.isInstance('foo bar'); // true
   */
  String.isInstance = (arg: any): arg is string => typeof arg === 'string'
}

if (!String.prototype.capitalize) {
  /**
   * Returns the capitalized string
   * @param {boolean} [allWords=false]
   * @returns {string}
   * @example
   * 'foo bar'.capitalize(); // 'Foo bar'
   * 'hello world'.capitalize(true); // 'Hello World'
   */
  String.prototype.capitalize = function(allWords = false): string {
    if (allWords) return this.replace(/\b[a-z]/g, (char) => char.toUpperCase())

    return this.replace(/^[a-z]/, (char) => char.toUpperCase())
  }
}

if (!String.prototype.decapitalize) {
  /**
   * Returns the decapitalized string
   * @param {boolean} [allWords=false]
   * @returns {string}
   * @example
   * 'Foo Bar'.decapitalize(); // 'foo Bar'
   * 'Hello World'.decapitalize(true); // 'hello world'
   */
  String.prototype.decapitalize = function(allWords = false): string {
    if (allWords) return this.replace(/\b[A-Z]/g, (char) => char.toLowerCase())

    return this.replace(/^[A-Z]/, (char) => char.toLowerCase())
  }
}

if (!String.prototype.mask) {
  /**
   * Replaces all but the last num of characters with the specified mask character
   * @param {number} [num=4]
   * @param {string} [mask='*']
   * @returns {string}
   * @example
   * '1234567890'.mask(); // '******7890'
   * '1234567890'.mask(3); // '*******890'
   * '1234567890'.mask(-4, '$'); // '$$$$567890'
   */
  String.prototype.mask = function(num = 4, mask = '*'): string {
    return this.slice(0, -num).replace(/./g, mask) + this.slice(-num)
  }
}

if (!String.prototype.pluralize) {
  /**
   * Returns the singular or plural form of the word based on the input number
   * @param {number} value
   * @param {string} [plural]
   * @returns {string}
   * @example
   * 'apple'.pluralize(0); // 'apples'
   * 'apple'.pluralize(1); // 'apple'
   * 'apple'.pluralize(2); // 'apples'
   * 'person'.pluralize(2, 'people'); // 'people'
   */
  String.prototype.pluralize = function(value: number, plural?: string): String {
    if (!plural) plural = `${this}s`

    return value === 1 ? this : plural
  }
}

if (!String.prototype.reverse) {
  /**
   * Reverses the string
   * @returns {string}
   * @example
   * 'foobar'.reverse(); // 'raboof'
   */
  String.prototype.reverse = function(): string {
    return [...this].reverse().join('')
  }
}

if (!String.prototype.lines) {
  /**
   * Splits a multiline string into an array of lines
   * @returns {string[]}
   * @example
   * 'This\nis a\nmultiline\nstring.\n'.lines(); // ['This', 'is a', 'multiline', 'string.' , '']
   */
  String.prototype.lines = function(): Array<string> {
    return this.split(/\r?\n/)
  }
}

if (!String.prototype.camelCase) {
  /**
   * Converts the string to camelcase
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
}

if (!String.prototype.kebabCase) {
  /**
   * Converts a string to kebab case
   * @returns {string}
   * @example
   * 'camelCase'.kebabCase(); // 'camel-case'
   * 'some text'.kebabCase(); // 'some-text'
   * 'some-mixed_string With spaces_underscores-and-hyphens'.kebabCase(); // 'some-mixed-string-with-spaces-underscores-and-hyphens'
   * 'AllThe-small Things'.kebabCase(); // "all-the-small-things"
   * 'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'.kebabCase(); // 'i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-some-xml-and-html'
   */
  String.prototype.kebabCase = function(): string {
    let s = this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)

    if (!s) s = ['']

    return s.map(x => x.toLowerCase()).join('-')
  }
}

if (!String.prototype.snakeCase) {
  /**
   * Converts a string to snake case
   * @returns {string}
   * @example
   * 'camelCase'.snakeCase(); // 'camel_case'
   * 'some text'.snakeCase(); // 'some_text'
   * 'some-mixed_string With spaces_underscores-and-hyphens'.snakeCase(); // 'some_mixed_string_with_spaces_underscores_and_hyphens'
   * 'AllThe-small Things'.snakeCase(); // "all_the_small_things"
   * 'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'.snakeCase(); // 'i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html'
   */
  String.prototype.snakeCase = function(): string {
    let s = this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)

    if (!s) s = ['']

    return s.map(x => x.toLowerCase()).join('_')
  }
}

if (!String.prototype.truncate) {
  /**
   * Truncates a string up to a specified length
   * @param {number} num
   * @returns {string}
   * @example
   * 'boomerang'.truncate(7); // 'boom...'
   */
  String.prototype.truncate = function(num: number): String {
    return this.length > num ? this.slice(0, num > 3 ? num - 3 : num) + '...' : this
  }
}

if (!String.prototype.words) {
  /**
   * Converts a given string into an array of words
   * @param {RegExp} pattern
   * @returns {string[]}
   * @example
   * 'I love javaScript!!'.words(); // ["I", "love", "javaScript"]
   * 'python, javaScript & coffee'.words(); // ["python", "javaScript", "coffee"]
   */
  String.prototype.words = function(pattern = /[^a-zA-Z-]+/): Array<string> {
    return this.split(pattern).filter(Boolean)
  }
}

if (!String.prototype.contains) {
  /**
   * Find out if the string contains the argument at any position
   * @param {RegExp} pattern
   * @returns {string[]}
   * @example
   * 'javaScript & typescript'.contains('Typescript'); // true
   * 'javaScript & typescript'.contains('Typescript', true); // false
   */
  String.prototype.contains = function(str: string, sensitive = false): boolean {
    if (sensitive) return this.indexOf(str) !== -1

    return this.toLowerCase().indexOf(str.toLowerCase()) !== -1
  }
}
