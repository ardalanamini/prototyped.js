import pad from "../../string/pad";

export default function yesterday(): string {
  const now = new Date();

  now.setDate(now.getDate() - 1);

  return `${now.getFullYear()}-${pad(`${now.getMonth() + 1}`, -2, "0")}-${pad(
    `${now.getDate()}`,
    -2,
    "0",
  )}`;
}
