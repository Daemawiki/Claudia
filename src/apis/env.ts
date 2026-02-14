import process from "process";

const isLocalhost = window.location.href.includes("localhost");

export const COOKIE_DOMAIN = isLocalhost
  ? "localhost"
  : "daemawiki-server.xquare.app";

export const { BASE_URL } = process.env;
export const SERVER_URL = process.env.SETVER_URL;
