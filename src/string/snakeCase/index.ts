/**
 * Converts a string to snake case
 * @param str
 * @example
 * snakeCase('camelCase'); // 'camel_case'
 * @example
 * snakeCase('some text'); // 'some_text'
 * @example
 * snakeCase('some-mixed_string With spaces_underscores-and-hyphens');
 * // 'some_mixed_string_with_spaces_underscores_and_hyphens'
 * @example
 * snakeCase('AllThe-small Things'); // "all_the_small_things"
 * @example
 * snakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML');
 * // 'i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html'
 */
export default function snakeCase(str: string): string {
  return (
    str.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+|[A-Z]|\d+/g) ?? [""]
  )
    .map(x => x.toLowerCase())
    .join("_");
}
