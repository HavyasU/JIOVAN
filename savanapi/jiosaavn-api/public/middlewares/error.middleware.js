"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const celebrate_1 = require("celebrate");
const logger_1 = require("../utils/logger");
const errorMiddleware = (error, req, res, next) => {
    try {
        if ((0, celebrate_1.isCelebrateError)(error)) {
            const message = [];
            const status = 400;
            for (const value of error.details.values()) {
                value.details.forEach((err) => {
                    message.push({
                        location: err.context?.key,
                        error: err.message.replaceAll('"', ''),
                    });
                });
            }
            logger_1.logger.error(`[${req.method}] [${req.path}] [${status}], ${JSON.stringify(message)}`);
            res.status(status).json({
                status: 'FAILED',
                message,
                data: null,
            });
        }
        else {
            const status = error.status || 500;
            const message = error.message || 'Something went wrong';
            logger_1.logger.error(`[${req.method}] [${req.path}] [${status}], ${JSON.stringify(message)}`);
            res.status(status).json({
                status: 'FAILED',
                message,
                data: null,
            });
        }
    }
    catch (error) {
        next(error);
    }
};
exports.errorMiddleware = errorMiddleware;
