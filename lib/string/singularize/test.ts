import "./index";

describe("String.prototype.singularize", () => {
  test("\"apple\".singularize() returns \"apple\"", () => {
    expect("apple".singularize())
      .toBe("apple");
  });

  test("\"apples\".singularize() returns \"apple\"", () => {
    expect("apples".singularize())
      .toBe("apple");
  });

  test("\"person\".singularize() returns \"person\"", () => {
    expect("person".singularize())
      .toBe("person");
  });

  test("\"people\".singularize() returns \"person\"", () => {
    expect("people".singularize())
      .toBe("person");
  });
});
