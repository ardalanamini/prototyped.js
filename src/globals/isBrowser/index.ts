import contains from "../../array/contains/index.js";

export default function isBrowser(): boolean {
  return !contains([typeof window, typeof document], "undefined");
}
