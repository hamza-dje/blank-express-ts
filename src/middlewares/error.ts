import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/error/custom-error";
import { StatusCodes } from "http-status-codes";

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message,
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "An error has occured, please try again!",
    });
};
