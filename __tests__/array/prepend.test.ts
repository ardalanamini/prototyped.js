import "../../src/shim";

describe("Array.prototype.prepend", () => {
  test("myArray = [1, 2, 3] & myArray.prepend(0) results myArray to be [0, 1, 2, 3]", () => {
    const myArray = [1, 2, 3];

    expect(myArray.prepend(0)).toBe(4);
    expect(myArray).toEqual([0, 1, 2, 3]);
  });
});
