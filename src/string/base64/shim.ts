import { addPrototype } from "../../utils.js";
import base64 from "./index.js";

declare global {
  interface String {
    /**
     * Encodes data with MIME base64
     * @example
     * 'prototyped.js'.base64(); // 'cHJvdG90eXBlZC5qcw=='
     */
    base64(): string;
  }
}

addPrototype(String, "base64", base64);
