export { }

declare global {
  interface String {
    kebabCase(): string
  }
}

/**
 * Converts a string to kebab case
 * @memberof String
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
