import arrayRepeat from "../../array/repeat";

export default function repeat(n: number, value = " "): string {
  return arrayRepeat(n, value).join("");
}
