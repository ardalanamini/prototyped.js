import "../../src/array/clone";

describe("Array.prototype.clone", () => {
  test("[].clone() returns []", () => {
    const a: unknown[] = [];
    const b = a.clone(true);

    expect(a).not.toBe(b);
    expect(b).toBeInstanceOf(Array);

    a.push(4);

    expect(a).not.toEqual(b);
  });

  test("[1, 2, 3].clone() returns [1, 2, 3]", () => {
    const a = [1, 2, 3];
    const b = a.clone();

    expect(a).not.toBe(b);

    a.push(4);

    expect(a).not.toEqual(b);
  });

  test('[1, { foo: "bar" }, 3].clone(true) returns [1, { foo: "bar" }, 3]', () => {
    const a = [1, { foo: "bar" }, 3];
    const b = a.clone(true);

    expect(a).not.toBe(b);
    expect(a[1]).not.toBe(b[1]);
  });
});
