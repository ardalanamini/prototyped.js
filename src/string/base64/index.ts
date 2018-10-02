import * as method from "./method";
import * as utils from "../../utils";

declare global {
  interface String {
    base64(): string;
  }
}

/**
 * Encodes data with MIME base64
 * @memberof String
 * @returns {String}
 * @example
 * 'prototyped.js'.base64(); // 'cHJvdG90eXBlZC5qcw=='
 */
String.prototype.base64 = utils.methodToPrototype(method);
