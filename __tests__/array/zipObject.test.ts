import "prototyped.js/shim";

describe("Array.prototype.zipObject", () => {
  test('["a", "b", "c"].zipObject([1, 2]) returns {a: 1, b: 2, c: undefined}', () => {
    expect(["a", "b", "c"].zipObject([1, 2])).toEqual({
      a: 1,
      b: 2,
      // eslint-disable-next-line no-undefined
      c: undefined,
    });
  });

  test('["a", "b"].zipObject([1, 2, 3]) returns {a: 1, b: 2}', () => {
    expect(["a", "b"].zipObject([1, 2, 3])).toEqual({
      a: 1,
      b: 2,
    });
  });
});
