import { addPrototype } from "../../utils.js";
import kebabCase from "./index.js";

declare global {
  interface String {
    /**
     * Converts a string to kebab case
     * @example
     * "camelCase".kebabCase(); // "camel-case"
     * @example
     * "some text".kebabCase(); // "some-text"
     * @example
     * "some-mixed_string With spaces_underscores-and-hyphens".kebabCase();
     * // "some-mixed-string-with-spaces-underscores-and-hyphens"
     * @example
     * "AllThe-small Things".kebabCase(); // "all-the-small-things"
     * @example
     * "IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML".kebabCase();
     * // "i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-some-xml-and-html"
     */
    kebabCase(): string;
  }
}

addPrototype(String, "kebabCase", kebabCase);
