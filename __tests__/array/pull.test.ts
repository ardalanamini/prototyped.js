import "../../src/array/pull";

describe("Array.prototype.pull", () => {
  test(
    'myArray = ["a", "b", "c", "a", "b", "c"] & myArray.pull("a", "c") results ' +
      'myArray to be [ "b", "b" ]',
    () => {
      const myArray = ["a", "b", "c", "a", "b", "c"];

      myArray.pull("a", "c");

      expect(myArray).toEqual(["b", "b"]);
    },
  );
});
