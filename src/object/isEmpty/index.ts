import size from "../size/index.js";

export default function isEmpty(obj: Record<string, unknown>): boolean {
  return size(obj) === 0;
}
