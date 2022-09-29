import express from "express";
import propertiesRouter from "./properties/index.js";

function routerApi(app) {
  const router = express.Router();
  app.use("", router);
  router.use("/properties", propertiesRouter);
}

export default routerApi;
