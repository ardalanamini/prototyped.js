import { addPrototype } from "../../utils.js";
import crossJoin from "./index.js";

declare global {
  interface Array<T> {
    /**
     * Cross joins the array's values among the given arrays,
     * returning a Cartesian product with all possible permutations
     * @param array
     * @example
     * [1, 2].crossJoin(['a', 'b']); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
     */
    crossJoin<P>(array: P[]): [T, P][];
  }
}

addPrototype(Array, "crossJoin", crossJoin);
