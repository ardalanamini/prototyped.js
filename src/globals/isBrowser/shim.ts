import isBrowser from "./index.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace globalThis {

    /**
     * Determines if the current runtime environment is a browser,
     * so that front-end modules can run on the server (Node) without throwing errors
     * @example
     * isBrowser(); // false
     */
    function isBrowser(): boolean;
  }
}

global.isBrowser = isBrowser;
