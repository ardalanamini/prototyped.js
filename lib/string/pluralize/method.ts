import * as singularize from "../singularize/method";
import * as pluralize from "pluralize";

const method = (str: string, value?: number): string => {
  if (value === 1) return singularize(str);

  return pluralize.plural(str);
};

export = method;
