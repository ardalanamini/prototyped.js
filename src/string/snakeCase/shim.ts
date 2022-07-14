import { addPrototype } from "../../utils.js";
import snakeCase from "./index.js";

declare global {
  interface String {

    /**
     * Converts a string to snake case
     * @example
     * 'camelCase'.snakeCase(); // 'camel_case'
     * @example
     * 'some text'.snakeCase(); // 'some_text'
     * @example
     * 'some-mixed_string With spaces_underscores-and-hyphens'.snakeCase();
     * // 'some_mixed_string_with_spaces_underscores_and_hyphens'
     * @example
     * 'AllThe-small Things'.snakeCase(); // "all_the_small_things"
     * @example
     * 'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'.snakeCase();
     * // 'i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html'
     */
    snakeCase(): string;
  }
}

addPrototype(String, "snakeCase", snakeCase);
