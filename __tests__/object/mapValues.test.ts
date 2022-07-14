import "prototyped.js/shim";

describe("Object.prototype.$mapValues", () => {
  test(
    '{fred: { user: "fred", age: 40 }, pebbles: { user: "pebbles", age: 1 }}.$mapValues(u => u.age) returns '
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
      }.$mapValues((u: any) => u.age)).toEqual({
        fred   : 40,
        pebbles: 1,
      });
    },
  );
});
