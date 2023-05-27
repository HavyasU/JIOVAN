"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionError = void 0;
class HttpExceptionError extends Error {
    status;
    message;
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
        this.name = 'HttpExceptionError';
    }
}
exports.HttpExceptionError = HttpExceptionError;
