import { Router } from "express";
import getAllProperties from "./getAllProperties.js";
import getProperties from "./getProperties.js";
import getProperty from "./getProperty.js";

const propertiesRouter = Router();

export const BASE_ROUTE = "properties/";

propertiesRouter.get("/:property_id", getProperty);

propertiesRouter.get("/", getProperties);

propertiesRouter.get("/all", getAllProperties);

export default propertiesRouter;
