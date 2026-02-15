import axios from "axios";

const instance = axios.create({
  baseURL: "https://daemawiki-server-stag.xquare.app/",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export { instance };

export default instance;
