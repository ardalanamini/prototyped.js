import "../../src/array/prepend";

describe("Array.prototype.prepend", () => {
  test("myArray = [1, 2, 3] & myArray.prepend(0) results myArray to be [0, 1, 2, 3]", () => {
    expect(
      (() => {
        const myArray = [1, 2, 3];

        myArray.prepend(0);

        return myArray;
      })(),
    ).toEqual([0, 1, 2, 3]);
  });
});
