import { addPrototype } from "../../utils.js";
import size from "./index.js";

declare global {
  interface Object {

    /**
     * Get size of the object
     * @example
     * { one: 1, two: 2, three: 3 }.$size(); // 3
     */
    $size(): number;
  }
}

addPrototype(Object, "$size", size);
