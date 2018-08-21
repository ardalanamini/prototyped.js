import * as pad from "../../string/pad/method";

const method = () => {
  const now = new Date();

  now.setDate(now.getDate() + 1);

  return `${now.getFullYear()}-${pad(`${now.getMonth() + 1}`, -2, "0")}-${pad(`${now.getDate()}`, -2, "0")}`;
};

export = method;
