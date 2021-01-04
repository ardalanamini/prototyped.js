import "../../src/array/append";

describe("Array.prototype.append", () => {
  test("myArray = [1, 2, 3] & myArray.append(0) results myArray to be [1, 2, 3, 0]", () => {
    expect(
      (() => {
        const myArray = [1, 2, 3];

        myArray.append(0);

        return myArray;
      })(),
    ).toEqual([1, 2, 3, 0]);
  });
});
