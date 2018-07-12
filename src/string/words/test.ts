import "./index";

describe("String.prototype.words", () => {
  test("\"I love javaScript!!\".words() returns [\"I\", \"love\", \"javaScript\"]", () => {
    expect("I love javaScript!!".words())
      .toEqual(["I", "love", "javaScript"]);
  });

  test("\"python, javaScript & coffee\".words() returns [\"python\", \"javaScript\" ,\"coffee\"]", () => {
    expect("python, javaScript & coffee".words())
      .toEqual(["python", "javaScript", "coffee"]);
  });
});
