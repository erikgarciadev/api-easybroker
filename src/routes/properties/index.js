import { Router } from "express";
import fetch from "node-fetch";
import { API_BASE_EASYBROKER } from "../../config/constants.js";
import { getHeaders } from "../../utils/getHeaders.js";
import { getParseData } from "../../utils/getParseData.js";

const propertiesRouter = Router();

const BASE_ROUTE = "properties";

propertiesRouter.get("/", async (req, res) => {
  const API_BASE = req.protocol + "://" + req.headers.host + "/";

  try {
    const response = await fetch(
      `${API_BASE_EASYBROKER}${BASE_ROUTE}${req.url}`,
      {
        headers: getHeaders(),
      }
    );
    const data = await response.json();

    res.send(getParseData(data, API_BASE_EASYBROKER, API_BASE));
  } catch (err) {
    res.send({
      error: err.message,
    });
  }
});

export default propertiesRouter;
