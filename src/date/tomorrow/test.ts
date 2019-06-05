import ".";
import pad from "../../string/pad/method";

describe("Date.tomorrow", () => {
  test("Date.tomorrow() returns tomorrow's date", () => {
    const now = new Date();

    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
    );

    expect(Date.tomorrow()).toEqual(
      `${tomorrow.getFullYear()}-${pad(
        `${tomorrow.getMonth() + 1}`,
        -2,
        "0",
      )}-${pad(`${tomorrow.getDate()}`, -2, "0")}`,
    );
  });
});
