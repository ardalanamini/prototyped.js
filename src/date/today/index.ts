import pad from "../../string/pad/index.js";

/**
 * Returns today's date in `YYYY-MM-DD` format
 * @example
 * today(); // "2018-08-10"
 */
export default function today(): string {
  const now = (new Date);

  const padSize = -2;

  return `${ now.getFullYear() }-${ pad(`${ now.getMonth() + 1 }`, padSize, "0") }-${ pad(
    `${ now.getDate() }`,
    padSize,
    "0",
  ) }`;
}
