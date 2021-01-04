import "../../src/object/mapValues";

describe("Object.prototype.$mapValues", () => {
  test(
    // tslint:disable-next-line: max-line-length
    '{fred: { user: "fred", age: 40 }, pebbles: { user: "pebbles", age: 1 }}.$mapValues(u => u.age) returns ' +
      "{ fred: 40, pebbles: 1 }",
    () => {
      expect(
        {
          fred: { user: "fred", age: 40 },
          pebbles: { user: "pebbles", age: 1 },
        }.$mapValues(u => u.age),
      ).toEqual({ fred: 40, pebbles: 1 });
    },
  );
});
