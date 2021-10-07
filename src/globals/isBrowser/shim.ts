import isBrowser from ".";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace globalThis {
    function isBrowser(): boolean;
  }
}

/**
 * Determines if the current runtime environment is a browser,
 * so that front-end modules can run on the server (Node) without throwing errors
 * @memberof global
 * @function isBrowser
 * @returns {Boolean}
 * @example
 * isBrowser(); // false
 */
global.isBrowser = isBrowser;
