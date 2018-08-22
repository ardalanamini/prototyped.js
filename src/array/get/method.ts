const method = <T = any, P = null>(arr: T[], index: number, def: P = null as any) => (index >= arr.length) ?
  def :
  arr[index];

export = method;
