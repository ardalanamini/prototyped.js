import * as method from "./method";

declare global {
  interface String {
    base64Decode(): string;
  }
}

/**
 * Decodes data encoded with MIME base64
 * @memberof String
 * @returns {string}
 * @example
 * "cHJvdG90eXBlZC5qcw==".base64Decode(); // "prototyped.js"
 */
String.prototype.base64Decode = function() {
  return method(this as string);
};
