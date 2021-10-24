import "prototyped.js/shim";

describe("Array.prototype.zip", () => {
  test('["a", "b"].zip([1, 2], [true, false]) returns [["a", 1, true], ["b", 2, false]]', () => {
    expect(["a", "b"].zip([1, 2], [true, false])).toEqual([
      ["a", 1, true],
      ["b", 2, false],
    ]);
  });

  test('["a"].zip([1, 2], [true, false]) returns [["a", 1, true], [undefined, 2, false]]', () => {
    expect(["a"].zip([1, 2], [true, false])).toEqual([
      ["a", 1, true],
      [undefined, 2, false],
    ]);
  });
});
