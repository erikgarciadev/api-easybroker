import { Router } from "express";
import { API_BASE_EASYBROKER } from "../../config/constants.js";
import PropertyService from "../../services/propertyService.js";
import { getParseData } from "../../utils/getParseData.js";

const propertiesRouter = Router();

const BASE_ROUTE = "properties/";

propertiesRouter.get("/", async (req, res) => {
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
});

propertiesRouter.get("/all", async (req, res) => {
  let results = [];

  let url = `${API_BASE_EASYBROKER}${BASE_ROUTE}`;

  try {
    const responses = [];
    const data = await PropertyService.getProperties(url);
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
});

export default propertiesRouter;
