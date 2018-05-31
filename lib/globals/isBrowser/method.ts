import * as contains from "../../array/contains/method";

const method = () => !contains([typeof window, typeof document], "undefined");

export = method;
