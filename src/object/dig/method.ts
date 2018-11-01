import * as values from "../values/method";

const method = (obj: object, target: string): any =>
  target in obj
    ? (obj as any)[target]
    : values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc;
      if (typeof val === "object") return method(val, target);
    }, undefined);

export = method;
