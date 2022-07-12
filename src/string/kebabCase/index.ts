/**
 * Converts a string to kebab case
 * @param str
 * @example
 * kebabCase("camelCase"); // "camel-case"
 * @example
 * kebabCase("some text"); // "some-text"
 * @example
 * kebabCase("some-mixed_string With spaces_underscores-and-hyphens");
 * // "some-mixed-string-with-spaces-underscores-and-hyphens"
 * @example
 * kebabCase("AllThe-small Things"); // "all-the-small-things"
 * @example
 * kebabCase("IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML");
 * // "i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-some-xml-and-html"
 */
export default function kebabCase(str: string): string {
  return (
    str.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g,
    ) || [""]
  )
    .map((x) => x.toLowerCase())
    .join("-");
}
