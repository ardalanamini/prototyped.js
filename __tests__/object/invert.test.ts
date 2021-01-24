import "../../src/shim";

describe("Object.prototype.$invert", () => {
  test('{ name: "John", age: 20 }.$invert() returns { 20: "age", John: "name" }', () => {
    expect({ name: "John", age: 20 }.$invert()).toEqual({
      20: "age",
      John: "name",
    });
  });
});
