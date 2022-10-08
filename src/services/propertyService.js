import fetch from "node-fetch";
import { getHeaders } from "../utils/getHeaders.js";

class PropertyService {
  async getProperties(url) {
    const response = await fetch(url, {
      headers: getHeaders(),
    });
    return await response.json();
  }

  async getProperty(url) {
    const response = await fetch(url, {
      headers: getHeaders(),
    });
    return await response.json();
  }
}

export default new PropertyService();
