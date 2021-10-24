import "prototyped.js/shim";

describe("Array.prototype.merge", () => {
  test("myArray = [1, 2, 3] & myArray.merge([0, 6 , 2]) results myArray to be [1, 2, 3, 0, 6, 2]", () => {
    const myArray = [1, 2, 3];

    myArray.merge([0, 6, 2]);

    expect(myArray).toEqual([1, 2, 3, 0, 6, 2]);
  });
});
