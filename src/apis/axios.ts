import { BASE_URL } from './env';
import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://daemawiki-server.xquare.app/',
  timeout: 10000,
  withCredentials: true, 
});
