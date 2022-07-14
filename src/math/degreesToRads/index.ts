import { PI, STRAIGHT_ANGLE_DEGREE } from "../../utils.js";

/**
 * Converts a decimal degree to radians
 * @param num
 * @example
 * degreesToRads(180); // 3.141592653589793
 */
export default function degreesToRads(num: number): number {
  return (num * PI) / STRAIGHT_ANGLE_DEGREE;
}
