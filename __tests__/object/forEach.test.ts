import "@src/shim";

describe("Object.prototype.$forEach", () => {
  test(
    '{fred: { user: "fred", age: 40 }, pebbles: { user: "pebbles", age: 1 }}.$forEach(u => u.age) returns ' +
      "{ fred: 40, pebbles: 1 }",
    () => {
      const obj = {
        fred: { user: "fred", age: 40 },
        pebbles: { user: "pebbles", age: 1 },
      };
      const result: any = {};

      obj.$forEach((u: any, k) => (result[k] = u.age));

      expect(result).toEqual({ fred: 40, pebbles: 1 });
    },
  );
});
