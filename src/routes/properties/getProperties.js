import { BASE_ROUTE } from "./index.js";
import { API_BASE_EASYBROKER } from "../../config/constants.js";
import { getParseData } from "../../utils/getParseData.js";
import PropertyService from "../../services/propertyService.js";

export default async function getProperties(req, res) {
  const API_BASE = req.protocol + "://" + req.headers.host + "/";

  const reqUrl = req.url.substring(1);

  try {
    const data = await PropertyService.getProperties(
      `${API_BASE_EASYBROKER}${BASE_ROUTE}${reqUrl}`
    );

    res.send(
      getParseData(data, BASE_ROUTE + reqUrl, API_BASE_EASYBROKER, API_BASE)
    );
  } catch (err) {
    res.send({
      error: err.message,
    });
  }
}
