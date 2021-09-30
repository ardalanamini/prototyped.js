import "@src/shim";

describe("String.prototype.kebabCase", () => {
  test('"camelCase".kebabCase() returns "camel-case"', () => {
    expect("camelCase".kebabCase()).toBe("camel-case");
  });

  test('"some text".kebabCase() returns "some-text"', () => {
    expect("some text".kebabCase()).toBe("some-text");
  });

  test(
    '"some-mixed_string With spaces_underscores-and-hyphens".kebabCase() returns ' +
      '"some-mixed-string-with-spaces-underscores-and-hyphens"',
    () => {
      expect(
        "some-mixed_string With spaces_underscores-and-hyphens".kebabCase(),
      ).toBe("some-mixed-string-with-spaces-underscores-and-hyphens");
    },
  );

  test('"AllThe-small Things".kebabCase() returns "all-the-small-things"', () => {
    expect("AllThe-small Things".kebabCase()).toBe("all-the-small-things");
  });

  test('"IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML".kebabCase() returns "i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-some-xml-and-html"', () => {
    expect(
      "IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML".kebabCase(),
    ).toBe(
      "i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-some-xml-and-html",
    );
  });

  test('"foo_Bar22".kebabCase() returns "foo-bar-22"', () => {
    expect("foo_Bar22".kebabCase()).toBe("foo-bar-22");
  });

  test('"".kebabCase() returns ""', () => {
    expect("".kebabCase()).toBe("");
  });
});
