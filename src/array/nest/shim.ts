import { addPrototype } from "../../utils.js";
import nest from "./index.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    /**
     * Given a flat array of objects linked to one another, it will nest them recursively
     * @param [link="parent_id"]
     * @param [key="id"]
     * @example
     * const comments = [
     *   { id: 1, comment_id: null },
     *   { id: 2, comment_id: 1 },
     *   { id: 3, comment_id: 1 },
     *   { id: 4, comment_id: 2 },
     *   { id: 5, comment_id: 4 }
     * ];
     * comments.nest("comment_id"); // [{ id: 1, comment_id: null, children: [...] }]
     */
    nest(link?: string, key?: string): Record<string, unknown>[];
  }
}

addPrototype(Array, "nest", nest);
