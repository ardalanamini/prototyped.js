import { addPrototype } from "../../utils.js";
import dig from "./index.js";

declare global {
  interface Object {
    /**
     * Returns the target value in a nested JSON object, based on the given key
     * @param target
     * @example
     * const data = {
     *  level1: {
     *   level2: {
     *    level3: 'some data'
     *   }
     *  }
     * };
     * data.$dig('level3'); // 'some data'
     * data.$dig('level4'); // undefined
     */
    $dig(target: string): unknown;
  }
}

addPrototype(Object, "$dig", dig);
