/**
 * convert key path string to key array
 * @private
 * @param {String} path
 * @returns {Array}
 * @example
 * pathToKeys("selector.to[0][11].value"); // ["selector", "to", 0, 11, "value"]
 */
export const pathToKeys = (path: string) => path
  .replace(/([^\.])\[/g, (m, match) => `${match}.[`)
  .split(".")
  .map((key) => {
    const match = key.match(/^\[(\d+)\]$/);

    if (match) return +match[1];

    return key;
  });
