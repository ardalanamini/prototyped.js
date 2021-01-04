import values from "../values/method";

const method = (obj: Record<string, unknown>, target: string): any => {
  if (target in obj) return (obj as any)[target];

  return values(obj).reduce((acc, val) => {
    if (acc !== undefined) return acc;
    if (typeof val === "object") return method(val as any, target);
  }, undefined);
};

export = method;
