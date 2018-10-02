import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    kebabCase(): string;
  }
}

/**
 * Converts a string to kebab case
 * @memberof String
 * @returns {String}
 * @example
 * "camelCase".kebabCase(); // "camel-case"
 * "some text".kebabCase(); // "some-text"
 * "some-mixed_string With spaces_underscores-and-hyphens".kebabCase();
 * // "some-mixed-string-with-spaces-underscores-and-hyphens"
 * "AllThe-small Things".kebabCase(); // "all-the-small-things"
 * "IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML".kebabCase();
 * // "i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-some-xml-and-html"
 */
String.prototype.kebabCase = utils.methodToPrototype(method);
