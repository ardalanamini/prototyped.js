export const addPrototype = (key: string, extension: any) => {
  if (Object.prototype.hasOwnProperty(key)) return

  Object.defineProperty(
    Object.prototype,
    key,
    {
      value: extension,
      writable: true
    }
  )
}
