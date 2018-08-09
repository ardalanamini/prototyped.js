import "./index";

describe("Object.isPlainObject", () => {
  test("Object.isPlainObject(2) returns false", () => {
    expect(Object.isPlainObject(2)).toBe(false);
  });

  test("Object.isPlainObject(new Foo) returns false", () => {
    function Foo() {
       this.a = 1;
    }

    expect(Object.isPlainObject(new Foo())).toBe(false);
  });

  test("Object.isPlainObject({foo: \"bar\"}) returns true", () => {
    expect(Object.isPlainObject({ foo: "bar" })).toBe(true);
  });

  test("Object.isPlainObject([1, 2]) returns false", () => {
    expect(Object.isPlainObject([1, 2])).toBe(false);
  });

  test("Object.isPlainObject(null) returns false", () => {
    expect(Object.isPlainObject(null)).toBe(false);
  });
});
