export default function contains<Value>(
  array: Value[],
  value: Value,
  fromIndex?: number,
): boolean {
  return array.includes(value, fromIndex);
}
