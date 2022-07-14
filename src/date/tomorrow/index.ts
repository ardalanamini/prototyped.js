import pad from "../../string/pad/index.js";

/**
 * Returns tomorrow's date in `YYYY-MM-DD` format
 * @example
 * tomorrow(); // "2018-08-11"
 */
export default function tomorrow(): string {
  const now = (new Date);

  now.setDate(now.getDate() + 1);

  const padSize = -2;

  return `${ now.getFullYear() }-${ pad(`${ now.getMonth() + 1 }`, padSize, "0") }-${ pad(
    `${ now.getDate() }`,
    padSize,
    "0",
  ) }`;
}
