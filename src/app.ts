import express from "express";
import { ENV, logger, NODE_ENV } from "./config";
import routes from "./routes";

const app = express();

if (ENV.NODE_ENV === NODE_ENV.DEV) {
    app.use(logger);
}

app.use(express.json());

app.use("/", routes);

export { app };
