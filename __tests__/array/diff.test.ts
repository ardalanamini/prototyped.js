import "../../src/shim";

describe("Array.prototype.diff", () => {
  test("[1, 2, 3].diff([1, 2, 4]) returns [3]", () => {
    expect([1, 2, 3].diff([1, 2, 4])).toEqual([3]);
  });

  test("[1, 1.2, 1.5, 3, 0].diff([1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)) returns [1, 1.2]", () => {
    expect(
      [1, 1.2, 1.5, 3, 0].diff(
        [1.9, 3, 0],
        (a, b) => Math.round(a) === Math.round(b),
      ),
    ).toEqual([1, 1.2]);
  });
});
