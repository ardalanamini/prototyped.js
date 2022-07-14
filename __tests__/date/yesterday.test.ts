import "prototyped.js/shim";
import pad from "prototyped.js/string/pad";

describe("Date.yesterday", () => {
  test("Date.yesterday() returns yesterday's date", () => {
    const now = (new Date);

    const yesterday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 1,
    );

    expect(Date.yesterday()).toEqual(`${ yesterday.getFullYear() }-${ pad(
      `${ yesterday.getMonth() + 1 }`,
      -2,
      "0",
    ) }-${ pad(`${ yesterday.getDate() }`, -2, "0") }`);
  });
});
