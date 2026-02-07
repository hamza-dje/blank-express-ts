import { Router } from "express";
import { greetUser } from "../controllers/appController";

const appRouter = Router();

appRouter.route("/").get(greetUser);

export { appRouter };
