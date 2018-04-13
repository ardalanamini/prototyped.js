export const addPrototype = (extension: any) => {
  const key = extension.name;

  if (Object.prototype.hasOwnProperty(key)) return;

  Object.defineProperty(
    Object.prototype,
    key,
    {
      value: extension,
      writable: true,
    },
  );
};
