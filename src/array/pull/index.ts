export default function pull<T>(arr: T[], ...args: T[]): void {
  const pulled = arr.filter((value) => !args.includes(value));

  arr.length = 0;

  pulled.forEach((value) => arr.push(value));
}
