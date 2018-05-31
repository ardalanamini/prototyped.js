export const pathToKeys = (path: string) => path
  .replace(/([^\.])\[/g, (m, match) => `${match}.[`)
  .split(".")
  .map((key) => {

    const match = key.match(/^\[(\d+)\]$/);

    if (match) return +match[1];

    return key;
  });
