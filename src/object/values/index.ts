export default function values<
  T extends Record<string, unknown>,
  K extends keyof T
>(obj: T): T[K][] {
  return Object.values<T[K]>(obj as never);
}
