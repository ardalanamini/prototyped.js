import "@src/shim";

describe("String.prototype.humanize", () => {
  test(
    '"  capitalize dash-CamelCase_underscore trim  ".humanize() returns ' +
      '"Capitalize dash camel case underscore trim"',
    () => {
      expect("  capitalize dash-CamelCase_underscore trim  ".humanize()).toBe(
        "Capitalize dash camel case underscore trim",
      );
    },
  );

  test('"".humanize() returns ""', () => {
    expect("".humanize()).toBe("");
  });
});
