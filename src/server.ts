import * as express from "express";
import * as bodyParser from "body-parser";

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

let app: express.Application;

function startApp() {
  app = express();
  app.use(bodyParser.json());

  // Routes
  app.get("/ping", (
    req: express.Request,
    res: express.Response,
  ) => res.send("pong"));

  app.listen(PORT, HOST);
  // eslint-disable-next-line no-console
  console.log(`Running on http://${HOST}:${PORT}`);
}

startApp();
export default app;
