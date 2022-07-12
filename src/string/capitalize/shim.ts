import { addPrototype } from "../../utils.js";
import capitalize from "./index.js";

declare global {
  interface String {
    /**
     * Returns the capitalized string
     * @param [allWords=false]
     * @example
     * 'foo bar'.capitalize(); // 'Foo bar'
     * @example
     * 'hello world'.capitalize(true); // 'Hello World'
     */
    capitalize(allWords?: boolean): string;
  }
}

addPrototype(String, "capitalize", capitalize);
