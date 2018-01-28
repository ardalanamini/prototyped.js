export { }

declare global {
  interface String {
    humanize(): string
  }
}

/**
 * Converts an underscored, camelized, or dasherized string into a humanized one. Also removes beginning and ending whitespace
 * @memberof String
 * @returns {string}
 * @example
 * '  capitalize dash-CamelCase_underscore trim  '.humanize(); // 'Capitalize dash camel case underscore trim'
 */
String.prototype.humanize = function(): string {
  let s = this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) || ['']

  return s.map(x => x.toLowerCase()).join(' ').replace(/^[a-z]/, (char) => char.toUpperCase())
}
