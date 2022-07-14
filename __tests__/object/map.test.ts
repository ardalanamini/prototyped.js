import "prototyped.js/shim";

describe("Object.prototype.$map", () => {
  test(
    '{fred: { user: "fred", age: 40 }, pebbles: { user: "pebbles", age: 1 }}.$map(u => u.age) returns '
      + "{ fred: 40, pebbles: 1 }",
    () => {
      expect({
        fred: {
          user: "fred",
          age : 40,
        },
        pebbles: {
          user: "pebbles",
          age : 1,
        },
      }.$map((u: any, k) => ({ [k]: u.age }))).toEqual({
        fred   : 40,
        pebbles: 1,
      });
    },
  );
});
