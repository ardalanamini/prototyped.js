import degreesToRads from "./index.js";

declare global {
  interface Math {
    /**
     * Converts a decimal degree to radians
     * @param num
     * @example
     * Math.degreesToRads(180); // 3.141592653589793
     */
    degreesToRads(num: number): number;
  }
}

Math.degreesToRads = degreesToRads;
