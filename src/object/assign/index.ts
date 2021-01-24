export default function assign(
  obj: Record<string, unknown>,
  ...sources: Record<string, unknown>[]
): Record<string, unknown> {
  return Object.assign(obj, ...sources);
}
