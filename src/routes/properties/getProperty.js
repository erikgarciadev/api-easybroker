import { API_BASE_EASYBROKER } from "../../config/constants.js";
import { BASE_ROUTE } from "./index.js";

export default async function getProperty(req, res) {
  const reqUrl = req.url.substring(1);

  try {
    const data = await PropertyService.getProperties(
      `${API_BASE_EASYBROKER}${BASE_ROUTE}${reqUrl}`
    );

    res.send(data);
  } catch (err) {
    res.send({
      error: err.message,
    });
  }
}
