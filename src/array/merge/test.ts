import ".";

describe("Array.prototype.merge", () => {
  // tslint:disable-next-line: max-line-length
  test("myArray = [1, 2, 3] & myArray.merge([0, 6 , 2]) results myArray to be [1, 2, 3, 0, 6, 2]", () => {
    const myArray = [1, 2, 3];

    myArray.merge([0, 6, 2]);

    expect(myArray).toEqual([1, 2, 3, 0, 6, 2]);
  });
});
