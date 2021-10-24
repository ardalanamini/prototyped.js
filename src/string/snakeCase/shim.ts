import snakeCase from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface String {
    snakeCase(): string;
  }
}

/**
 * Converts a string to snake case
 * @memberof String.prototype
 * @function snakeCase
 * @returns {String}
 * @example
 * 'camelCase'.snakeCase(); // 'camel_case'
 * 'some text'.snakeCase(); // 'some_text'
 * 'some-mixed_string With spaces_underscores-and-hyphens'.snakeCase();
 * // 'some_mixed_string_with_spaces_underscores_and_hyphens'
 * 'AllThe-small Things'.snakeCase(); // "all_the_small_things"
 * 'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'.snakeCase();
 * // 'i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html'
 */
addPrototype(String, "snakeCase", snakeCase);
