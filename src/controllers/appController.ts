import { Request, Response } from "express";
import { greetUserMessage } from "../services/appService";

export const greetUser = (req: Request, res: Response) => {
    const message = greetUserMessage();
    return res.status(200).json({ message });
};
