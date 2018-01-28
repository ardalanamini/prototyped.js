export { }

declare global {
  interface String {
    snakeCase(): string
  }
}

/**
 * Converts a string to snake case
 * @memberof String
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
