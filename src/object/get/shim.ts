import { addPrototype } from "../../utils.js";
import get from "./index.js";

declare global {
  interface Object {

    /**
     * Retrieve the property indicated by the given selector from the object
     * @param key
     * @example
     * { selector: { to: { val: 'val to select' } } }.$get('selector.to.val'); // 'val to select'
     */
    $get(key: string): unknown;
  }
}

addPrototype(Object, "$get", get);
