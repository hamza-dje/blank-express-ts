import { StatusCodes } from "http-status-codes";

class CustomError extends Error {
    statusCode: StatusCodes;

    constructor(statusCode: StatusCodes, message: string) {
        super(message);
        this.statusCode = statusCode;

        Object.setPrototypeOf(this, CustomError.prototype);
    }
}

const createCustomError = (statusCode: StatusCodes, message: string) => {
    return new CustomError(statusCode, message);
};

export { CustomError, createCustomError };
