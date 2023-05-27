type Status = 400 | 401 | 403 | 404 | 409 | 422 | 429 | 500 | 503;
export declare class HttpExceptionError extends Error {
    status: Status;
    message: string;
    constructor(status: Status, message: string);
}
export {};
