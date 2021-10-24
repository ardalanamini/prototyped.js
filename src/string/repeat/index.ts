import arrayRepeat from "../../array/repeat/index.js";

export default function repeat(n: number, value = " "): string {
  return arrayRepeat(n, value).join("");
}
