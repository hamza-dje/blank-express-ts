import { Request, Response } from "express";
import { greetUserMessage } from "../services/appService";
import { StatusCodes } from "http-status-codes";

export const greetUser = (req: Request, res: Response) => {
    const message = greetUserMessage();
    return res.status(StatusCodes.OK).json({ message });
};
