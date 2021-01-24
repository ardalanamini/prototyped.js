import ObjectKeys from "../keys";

export default function empty(obj: Record<string, unknown>): void {
  const keys = ObjectKeys(obj);

  for (let i = 0; i < keys.length; i++) {
    delete obj[keys[i]];
  }
}
