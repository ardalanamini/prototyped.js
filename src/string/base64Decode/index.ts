import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    base64Decode(): string;
  }
}

/**
 * Decodes data encoded with MIME base64
 * @memberof String
 * @returns {String}
 * @example
 * "cHJvdG90eXBlZC5qcw==".base64Decode(); // "prototyped.js"
 */
String.prototype.base64Decode = utils.methodToPrototype(method);
