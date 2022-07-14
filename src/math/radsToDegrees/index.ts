import { PI, STRAIGHT_ANGLE_DEGREE } from "../../utils.js";

/**
 * Converts a radians to decimal degree
 * @param num
 * @example
 * radsToDegrees(Math.PI / 2); // 90
 */
export default function radsToDegrees(num: number): number {
  return (num * STRAIGHT_ANGLE_DEGREE) / PI;
}
