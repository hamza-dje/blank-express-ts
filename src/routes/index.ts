import { Router } from "express";
import { appRouter } from "./appRoutes";

const router = Router();

router.use("/", appRouter);

export default router;
