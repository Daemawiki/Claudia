import axios from "axios";
import { BASE_URL } from "./env";

const resolvedBaseUrl = BASE_URL || "https://daemawiki-server-stag.xquare.app/";

const instance = axios.create({
  baseURL: resolvedBaseUrl,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export { instance };
export default instance;
