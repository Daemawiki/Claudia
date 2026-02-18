const isLocalhost =
  typeof window !== "undefined" && window.location.href.includes("localhost");

const { BASE_URL, SETVER_URL: SERVER_URL } = process.env;

export const COOKIE_DOMAIN = isLocalhost
  ? "localhost"
  : "daemawiki-server.xquare.app";

export { BASE_URL, SERVER_URL };
