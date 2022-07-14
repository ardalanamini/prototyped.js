import "prototyped.js/shim";

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
