import radsToDegrees from "./index.js";

declare global {
  interface Math {
    /**
     * Converts a radians to decimal degree
     * @param num
     * @example
     * Math.radsToDegrees(Math.PI / 2); // 90
     */
    radsToDegrees(num: number): number;
  }
}

Math.radsToDegrees = radsToDegrees;
