import "../../src/shim";

describe("Object.isObjectLike", () => {
  test("Object.isObjectLike(2) returns false", () => {
    expect(Object.isObjectLike(2)).toBe(false);
  });

  test('Object.isObjectLike({foo: "bar"}) returns true', () => {
    expect(Object.isObjectLike({ foo: "bar" })).toBe(true);
  });

  test("Object.isObjectLike([1, 2]) returns true", () => {
    expect(Object.isObjectLike([1, 2])).toBe(true);
  });

  test("Object.isObjectLike(Function) returns false", () => {
    expect(Object.isObjectLike(Function)).toBe(false);
  });

  test("Object.isObjectLike(null) returns false", () => {
    expect(Object.isObjectLike(null)).toBe(false);
  });
});
