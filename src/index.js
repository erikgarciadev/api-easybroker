import app from "./app.js";
import { PORT } from "./config/constants.js";
import routerApi from "./routes/index.js";

routerApi(app);

app.listen(PORT, () => {
  return console.log(`server is listening on ${PORT}`);
});
