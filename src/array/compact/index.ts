export default function compact<Value>(array: Value[]): CompactT<Value>[] {
  return array.filter(Boolean) as never;
}

export type CompactT<Value> = Value extends ""
  ? never
  : Value extends 0
  ? never
  : Value extends false
  ? never
  : Value extends null
  ? never
  : Value extends undefined
  ? never
  : Value;
