import keys from "../keys";

export default function size(obj: Record<string, unknown>): number {
  return (obj.size as number) || (obj.length as number) || keys(obj).length;
}
