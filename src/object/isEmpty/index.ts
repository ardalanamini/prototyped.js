import size from "../size";

export default function isEmpty(obj: Record<string, unknown>): boolean {
  return size(obj) === 0;
}
