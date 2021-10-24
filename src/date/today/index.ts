import pad from "../../string/pad/index.js";

export default function today(): string {
  const now = new Date();

  return `${now.getFullYear()}-${pad(`${now.getMonth() + 1}`, -2, "0")}-${pad(
    `${now.getDate()}`,
    -2,
    "0",
  )}`;
}
