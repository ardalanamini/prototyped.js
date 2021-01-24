export default function toCSV<T>(arr: T[], delimiter = ","): string {
  return arr
    .map((v: any) => v.map((x: any) => `"${x}"`).join(delimiter))
    .join("\n");
}
