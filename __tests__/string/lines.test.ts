import "../../src/string/lines";

describe("String.prototype.lines", () => {
  // tslint:disable-next-line: max-line-length
  test('"This\nis a\nmultiline\nstring.\n".lines() returns ["This", "is a", "multiline", "string." , ""]', () => {
    expect("This\nis a\nmultiline\nstring.\n".lines()).toEqual([
      "This",
      "is a",
      "multiline",
      "string.",
      "",
    ]);
  });
});
