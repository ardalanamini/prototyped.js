import * as method from "./method";

declare global {
  namespace NodeJS {
    interface Global {
      isBrowser(): boolean;
    }
  }

  const isBrowser: () => boolean;
}

/**
 * Determines if the current runtime environment is a browser,
 * so that front-end modules can run on the server (Node) without throwing errors
 * @memberof Global
 * @returns {boolean}
 * @example
 * isBrowser(); // false
 */
global.isBrowser = method;
