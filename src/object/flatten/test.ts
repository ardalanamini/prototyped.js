import ".";

describe("Object.prototype.$flatten", () => {
  test("1", () => {
    class Cls {
      foo() {
        return "bar";
      }
    }

    const obj = {
      string: "foo",
      number: 1,
      array: [
        "one",
        {
          string: "two",
        },
        [2],
      ],
      object: {
        array: [{ number: 3 }],
      },
      date: new Date(),
      buffer: Buffer.alloc(2),
      class: Cls,
    };

    expect(obj.$flatten()).toEqual({
      string: "foo",
      number: 1,
      "array[0]": "one",
      "array[1].string": "two",
      "array[2][0]": 2,
      "object.array[0].number": 3,
      date: obj.date,
      buffer: obj.buffer,
      class: obj.class,
    });
  });
});
