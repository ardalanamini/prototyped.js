export default function unwind<T>(arr: T[], path: string): unknown[] {
  return arr.reduce((prev, cur) => {
    const values: any[] = (cur as any)[path];

    values.forEach((value) =>
      prev.push(Object.assign({}, cur, { [path]: value }) as any),
    );

    return prev;
  }, [] as any[]);
}
