import { addPrototype } from "../../utils.js";
import base64Decode from "./index.js";

declare global {
  interface String {
    /**
     * Decodes data encoded with MIME base64
     * @example
     * "cHJvdG90eXBlZC5qcw==".base64Decode(); // "prototyped.js"
     */
    base64Decode(): string;
  }
}

addPrototype(String, "base64Decode", base64Decode);
