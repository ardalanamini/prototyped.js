import values from "../values/index.js";

export default function dig(
  obj: Record<string, unknown>,
  target: string,
): unknown {
  if (target in obj) return obj[target];

  return values(obj).reduce((acc, val) => {
    if (acc !== undefined) return acc;

    if (typeof val === "object")
      return dig(val as Record<string, unknown>, target);
  }, undefined);
}
