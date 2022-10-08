import { BASE_ROUTE } from "./index.js";
import { API_BASE_EASYBROKER } from "../../config/constants.js";
import propertyService from "../../services/propertyService.js";

export default async function getAllProperties(req, res) {
  let results = [];

  let url = `${API_BASE_EASYBROKER}${BASE_ROUTE}`;

  try {
    const responses = [];
    const data = await propertyService.getProperties(url);
    const pages = Math.ceil(data.pagination.total / data.pagination.limit);
    results = [...results, ...data.content];
    for (let i = 2; i <= pages; i++) {
      responses.push(PropertyService.getProperties(`${url}?page=${i}`));
    }

    const _data = await Promise.all(responses);

    for (const content of _data) {
      if (!content.error) {
        results = [...results, ...content.content];
      }
    }

    res.send({
      total: results.length,
      content: results,
    });
  } catch (err) {
    res.send({
      error: err.message,
    });
  }
}
