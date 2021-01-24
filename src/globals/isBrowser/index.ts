import contains from "../../array/contains";

export default function isBrowser(): boolean {
  return !contains([typeof window, typeof document], "undefined");
}
