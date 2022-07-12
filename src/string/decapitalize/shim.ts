import { addPrototype } from "../../utils.js";
import decapitalize from "./index.js";

declare global {
  interface String {
    /**
     * Returns the decapitalized string
     * @param [allWords=false]
     * @example
     * 'Foo Bar'.decapitalize(); // 'foo Bar'
     * @example
     * 'Hello World'.decapitalize(true); // 'hello world'
     */
    decapitalize(allWords?: boolean): string;
  }
}

addPrototype(String, "decapitalize", decapitalize);
