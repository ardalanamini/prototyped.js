import ".";
import pad from "../../string/pad/method";

describe("Date.today", () => {
  test("Date.today() returns today's date", () => {
    const now = new Date();

    expect(Date.today()).toEqual(
      `${now.getFullYear()}-${pad(`${now.getMonth() + 1}`, -2, "0")}-${pad(
        `${now.getDate()}`,
        -2,
        "0",
      )}`,
    );
  });
});
