import express from "express";
import { ENV, logger, NODE_ENV } from "./config";
import routes from "./routes";
import { notFound } from "./middlewares/not-found";
import { errorHandler } from "./middlewares/error";

const app = express();

if (ENV.NODE_ENV === NODE_ENV.DEV) {
    app.use(logger);
}

app.use(express.json());

app.use("/", routes);

app.use(notFound);
app.use(errorHandler);

export { app };
