import { addPrototype } from "../../utils.js";
import set from "./index.js";

declare global {
  interface Object {

    /**
     * Puts the property value indicated by the given selector into the object
     * @param path
     * @param value
     * @example
     * const obj = { selector: { to: { val: 'val to select' } } };
     * obj.$set('selector.to.val', 'new value');
     * // obj -> { selector: { to: { val: 'new value' } } }
     */
    $set(path: string, value: unknown): void;
  }
}

addPrototype(Object, "$set", set);
