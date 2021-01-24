export default function defaults(
  obj: Record<string, unknown>,
  ...sources: Record<string, unknown>[]
): Record<string, unknown> {
  return Object.assign(sources.pop()!, ...sources.reverse(), obj);
}
