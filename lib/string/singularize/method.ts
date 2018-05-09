import * as pluralize from "pluralize";

const method = (str: string): string => pluralize.singular(str);

export = method;
