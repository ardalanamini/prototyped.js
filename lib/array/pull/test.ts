import "./index";

describe("Array.prototype.pull", () => {
  test(
    "myArray = [\"a\", \"b\", \"c\", \"a\", \"b\", \"c\"] & myArray.pull(\"a\", \"c\") results " +
    "myArray to be [ \"b\", \"b\" ]",
    () => {
      expect((() => {
        const myArray = ["a", "b", "c", "a", "b", "c"];

        myArray.pull("a", "c");

        return myArray;
      })()).toEqual(["b", "b"]);
    });
});
