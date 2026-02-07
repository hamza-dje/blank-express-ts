import { config } from "dotenv";

config();

enum NODE_ENV {
    DEV = "development",
    PROD = "production",
}

export type Env = {
    NODE_ENV: NODE_ENV;
    PORT: number;
};

// if (!process.env.NODE_ENV) {
//     throw new Error("NODE_ENV is missing in .env");
// } else
if (
    process.env.NODE_ENV !== NODE_ENV.DEV &&
    process.env.NODE_ENV !== NODE_ENV.PROD
) {
    throw new Error("NODE_ENV is neither 'development' nor 'production'");
}

export const ENV: Env = {
    NODE_ENV: process.env.NODE_ENV || NODE_ENV.DEV,
    PORT: Number(process.env.PORT) || 5000,
};
