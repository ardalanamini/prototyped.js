import contains from "../../array/contains/index.js";

/**
 * Determines if the current runtime environment is a browser,
 * so that front-end modules can run on the server (Node) without throwing errors
 * @example
 * isBrowser(); // false
 */
export default function isBrowser(): boolean {
  return !contains([typeof window, typeof document], "undefined");
}
