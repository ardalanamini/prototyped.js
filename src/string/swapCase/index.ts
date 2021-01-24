export default function swapCase(str: string): string {
  return str.replace(/\S/g, (c) =>
    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase(),
  );
}
