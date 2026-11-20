import "prototyped.js/shim";
import { merge } from "prototyped.js/object";

test.each([
  {
    name   : "object.merge",
    combine: merge,
  },
  {
    name: "Object.prototype.$merge",
    combine(obj: Record<string, unknown>, other: Record<string, unknown>): Record<string, unknown> {
      return obj.$merge(other);
    },
  },
])("$name creates own data properties for keys with inherited setters", ({ combine }) => {
  const setter = jest.fn();
  let result: Record<string, unknown>;

  Object.defineProperty(Object.prototype, "mergeLabel", {
    configurable: true,
    set         : setter,
  });

  try {
    result = combine({ mergeLabel: "first" }, { mergeLabel: ["second", "third"] });
  } finally {
    Reflect.deleteProperty(Object.prototype, "mergeLabel");
  }

  expect(setter).not.toHaveBeenCalled();
  expect(Object.getPrototypeOf(result)).toBe(Object.prototype);
  expect(Object.getOwnPropertyDescriptor(result, "mergeLabel")).toEqual({
    configurable: true,
    enumerable  : true,
    writable    : true,
    value       : ["first", "second", "third"],
  });
});

describe("Object.prototype.$merge", () => {
  test(
    '{a: [{ x: 2 }, { y: 4 }], b: 1}.$merge({a: { z: 3 }, b: [2, 3], c: "foo"}) returns '
      + '{ a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: "foo" }',
    () => {
      expect({
        a: [{ x: 2 }, { y: 4 }],
        b: 1,
      }.$merge({
        a: { z: 3 },
        b: [2, 3],
        c: "foo",
      })).toEqual({
        a: [{ x: 2 }, { y: 4 }, { z: 3 }],
        b: [1, 2, 3],
        c: "foo",
      });
    },
  );
});
