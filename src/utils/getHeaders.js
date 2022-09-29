import { API_KEY } from "../config/constants.js";

export function getHeaders() {
  return {
    "X-Authorization": API_KEY,
  };
}
